const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { TrendingResult } from "@/types";

const Trending = async (): Promise<TrendingResult> => {
  const res = await fetch(
    `${URL}/trending/movie/day?api_key=${API_KEY}&page=1

    `
  );
  const posts = await res.json();
  return posts;
};

export default Trending;
