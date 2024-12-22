const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { GenereResponse } from "@/types";

const getGenre = async (): Promise<GenereResponse> => {
  const res = await fetch(
    `${URL}/genre/movie/list?api_key=${API_KEY}

    `
  );
  const posts = await res.json();
  return posts;
};

export default getGenre;
