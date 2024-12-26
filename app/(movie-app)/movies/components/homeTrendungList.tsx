"use client";

import { TrendingResult } from "@/types";
import { useSession } from "next-auth/react";
import Image from "next/image";

// import { outfitMedium } from "@/app/layout";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }
}
interface NowPlayListProps {
  posts: TrendingResult[];
}
const HomeTrendingList = ({ posts }: NowPlayListProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data: session, status } = useSession();

  const addFavorites = async (data: TrendingResult) => {
    const response = await fetch(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      `/api/categories?userId=${session?.user?.id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data }),
      }
    );

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const userInfo = await response.json();
    // console.log(userInfo);
  };
  return (
    <>
      {posts.map((post) => (
        <div
          key={post.id}
          className="relative w-[240px] h-[140px]  md:w-[470px] md:h-[230px]"
        >
          <Image
            className="w-full h-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${post.backdrop_path}`}
            alt={post.title}
            width={470}
            height={230}
          />
          <div
            onClick={() => addFavorites(post)}
            className="absolute top-0 right-0 mr-4 mt-4 md:mr-6 md:mt-6 w-[32px] h-[32px] bg-[#979797] rounded-[100px] cursor-pointer hover:bg-secondary-400"
          >
            <svg
              className="translate-y-2.5 translate-x-2.5"
              width="12"
              height="14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                stroke="#FFF"
                strokeWidth="1.5"
                fill="none"
              />
            </svg>
          </div>
          <div className="absolute bottom-0 pl-4 pb-4 md:pl-6 md:pb-6">
            <ul className="flex gap-5 opacity-80 text-[12px]">
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
            <a
              href={`/movies/details/${post.id}`}
              className={`text-base md:text-2xl leading-normal hover:text-secondary-400 transition-all duration-300 ease-in-out`}
            >
              {post.title}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeTrendingList;
