import { NextResponse } from "next/server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const GET = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return new NextResponse(
        JSON.stringify({ message: "Invalid or missing userId" }),
        {
          status: 400,
        }
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return new NextResponse(
        JSON.stringify({ message: "User not found in the database" }),
        {
          status: 404,
        }
      );
    }

    const categories = await prisma.bookmarke.findMany({
      where: { userId },
    });

    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({
        message: "Error in fetching categories",
        error: error.message,
      }),
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const POST = async (request: Request) => {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId") as string;

    const body = await request.json();

    const {
      title,
      backdrop_path,
      release_date,
      media_type,
      original_language,
    } = body.data;

    if (
      !title &&
      !backdrop_path &&
      !release_date &&
      !media_type &&
      !original_language
    ) {
      return new NextResponse("Missing name, email, or password", {
        status: 400,
      });
    }

    const existingCategory = await prisma.bookmarke.findFirst({
      where: {
        title: title,
        userId: userId,
      },
    });

    if (existingCategory) {
      return new NextResponse("Category already exists", { status: 400 });
    }

    const newCategory = await prisma.bookmarke.create({
      data: {
        title,
        backdrop_path,
        release_date,
        media_type,
        original_language,
        user: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return new NextResponse(
      JSON.stringify({ message: "Category is created", category: newCategory }),
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    return new NextResponse("Error in creating category" + error.message, {
      status: 500,
    });
  }
};
