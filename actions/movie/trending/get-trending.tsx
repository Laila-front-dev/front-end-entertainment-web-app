const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { TrendingResponse } from "@/types";

const getTrending = async (id: number) => {
  const res = await fetch(
    `${URL}/trending/movie/day?api_key=${API_KEY}&page=${id}

    `
  );
  const posts: TrendingResponse = await res.json();
  return { posts };
};

export default getTrending;
