// "use client";

// import Image from "next/image";

// import { TvResult } from "@/types";
// import { useSession } from "next-auth/react";

// interface NowPlayListProps {
//   posts: TvResult[];
// }

// const PageList = ({ posts }: NowPlayListProps) => {
//   // eslint-disable-next-line @typescript-eslint/no-unused-vars
//   const { data: session, status } = useSession();

//   const addFavorites = async (data: TvResult) => {
//     const response = await fetch(
//       `/api/categories?userId=${session?.user?.id}`,
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ data }),
//       }
//     );

//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const userInfo = await response.json();
//     // console.log(userInfo);
//   };
//   return (
//     <>
//       {posts.map((post) => (
//         <div key={post.id} className="relative mt-4 md:mt-7 lg:mt-9">
//           <Image
//             className="w-full h-full rounded-lg object-cover"
//             src={`https://image.tmdb.org/t/p/w500${post.backdrop_path}`}
//             alt={post.original_name}
//             width={470}
//             height={230}
//             loading="lazy"
//           />
//           <div
//             onClick={() => addFavorites(post)}
//             className="absolute top-0 right-0 mr-4 mt-4 md:mr-6 md:mt-6 w-[32px] h-[32px] bg-[#979797] rounded-[100px] cursor-pointer hover:bg-secondary-400"
//           >
//             <svg
//               className="translate-y-2.5 translate-x-2.5"
//               width="12"
//               height="14"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
//                 stroke="#FFF"
//                 strokeWidth="1.5"
//                 fill="none"
//               />
//             </svg>
//           </div>
//           <div className="">
//             <ul className="flex gap-5 opacity-80 text-[12px] pt-4">
//               <li>
//                 <span>{(post.release_date = post.first_air_date)}</span>
//               </li>
//               <li className="flex gap-2">
//                 <span>
//                   <svg
//                     width="12"
//                     height="12"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       d="M12 2.689H5.448L7.068.722 6.132 0 4.2 2.345 2.268.017l-.936.705 1.62 1.967H0V12h12V2.689Zm-4.8 8.147h-6V3.853h6v6.983Zm3-2.328H9V7.344h1.2v1.164Zm0-2.328H9V5.016h1.2V6.18Z"
//                       fill="#FFF"
//                       opacity=".75"
//                     />
//                   </svg>
//                 </span>
//                 <span className="capitalize">{post.media_type}</span>
//               </li>
//               <li>
//                 <span className="uppercase">{post.original_language}</span>
//               </li>
//             </ul>
//             <a
//               href={`/tv/details/${post.id}`}
//               className={`text-base md:text-2xl leading-normal hover:text-secondary-400 transition-all duration-300 ease-in-out`}
//             >
//               {(post.title = post.original_name)}
//             </a>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default PageList;
