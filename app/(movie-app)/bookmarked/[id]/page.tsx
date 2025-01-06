/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// "use client";

import Image from "next/image";

import { getServerSession, Session } from "next-auth";
import { authOptions } from "../../api/auth/[...nextauth]/authOptions";
import Container from "@/components/ui/container";
import { redirect } from "next/navigation";

interface ExtendedSession extends Session {
  user: {
    id: string;
    name?: string | null;
    email?: string | null;
    image?: string | null;
  };
}

const BookmarkedPage = async () => {
  const session: ExtendedSession | null = await getServerSession(authOptions);
  // const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const data = await fetch(
    `${process.env.NEXTAUTH_URL}/api/bookmarked?userId=${session?.user?.id}`
  );
  const posts = await data.json();

  return (
    <main>
      <section className="py-20">
        <Container>
          <h1 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
            BookmarkItem
          </h1>
          <p className="capitalize">
            welcome
            <span className="text-secondary-400"> {session?.user?.name}</span>
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px] pt-10">
            {posts.map((post: any) => (
              <div key={post.id}>
                <Image
                  className="w-full h-full rounded-lg object-cover"
                  src={`https://image.tmdb.org/t/p/w500${post.backdrop_path}`}
                  alt={post.title}
                  width={470}
                  height={230}
                  loading="lazy"
                />
                <ul className="flex gap-5 opacity-80 text-[12px] pt-4">
                  <li>
                    <span>{post.release_date}</span>
                  </li>
                  <li className="flex gap-2">
                    <span>
                      <svg
                        width="20"
                        height="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.956 0H3.044A3.044 3.044 0 0 0 0 3.044v13.912A3.044 3.044 0 0 0 3.044 20h13.912A3.044 3.044 0 0 0 20 16.956V3.044A3.044 3.044 0 0 0 16.956 0ZM4 9H2V7h2v2Zm-2 2h2v2H2v-2Zm16-2h-2V7h2v2Zm-2 2h2v2h-2v-2Zm2-8.26V4h-2V2h1.26a.74.74 0 0 1 .74.74ZM2.74 2H4v2H2V2.74A.74.74 0 0 1 2.74 2ZM2 17.26V16h2v2H2.74a.74.74 0 0 1-.74-.74Zm16 0a.74.74 0 0 1-.74.74H16v-2h2v1.26Z"
                          fill="#5A698F"
                        />
                      </svg>
                    </span>
                    <span className="capitalize">{post.media_type}</span>
                  </li>
                  <li>
                    <span className="uppercase">{post.original_language}</span>
                  </li>
                </ul>
                <h3>{post.title}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default BookmarkedPage;
