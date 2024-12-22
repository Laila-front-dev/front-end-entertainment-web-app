import Image from "next/image";

import { outfitMedium } from "@/app/layout";
import TvTrending from "@/actions/tv/trending";

const HomeTvTrending = async () => {
  const tvTrending = await TvTrending();
  return (
    <>
      {tvTrending.results.map((post) => (
        <div
          key={post.id}
          className="relative w-[240px] h-[140px]  md:w-[470px] md:h-[230px]"
        >
          <Image
            className="w-full h-full rounded-lg"
            src={`https://image.tmdb.org/t/p/w500${post.backdrop_path}`}
            alt={post.original_name}
            width={470}
            height={230}
          />
          <div className="absolute top-0 right-0 mr-4 mt-4 md:mr-6 md:mt-6 w-[32px] h-[32px] bg-[#979797] rounded-[100px]">
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
                <span>{post.first_air_date}</span>
              </li>
              <li className="flex gap-2">
                <span>
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
                      fill="#FFF"
                      opacity=".75"
                    />
                  </svg>
                </span>
                <span className="capitalize">{post.media_type}</span>
              </li>
              <li>
                <span className="uppercase">{post.original_language}</span>
              </li>
            </ul>
            <h3
              className={`text-base md:text-2xl leading-normal ${outfitMedium.className}`}
            >
              {post.original_name}
            </h3>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeTvTrending;
