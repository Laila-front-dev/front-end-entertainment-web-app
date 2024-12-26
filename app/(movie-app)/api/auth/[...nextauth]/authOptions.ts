import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "Credentials",
      // id: "credentials",
      credentials: {
        username: {
          label: "Username:",
          type: "text",
          placeholder: "your name",
        },
        email: {
          label: "email:",
          type: "email",
          placeholder: "your email",
        },
        password: {
          label: "password:",
          type: "password",
          placeholder: "your-password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          return null;
        }

        if (!user.hashPassword) {
          return null;
        }

        const passwordsMatch = await bcrypt.compare(
          credentials.password,
          user.hashPassword
        );

        if (!passwordsMatch) {
          return null;
        }

        return user;
      },
    }),
  ],

  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async jwt({ token, user, session }) {
      // console.log("jwt callback", { token, user, session });
      if (user) {
        return {
          ...token,
          id: user.id,
        };
      }
      return token;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async session({ token, user, session }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
      // return session;
    },
  },

  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "development",
};
