const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { TrendingTvResult } from "@/types";

const TvTrending = async (): Promise<TrendingTvResult> => {
  const res = await fetch(
    `${URL}/trending/tv/day?api_key=${API_KEY}&page=1

    `
  );
  const posts = await res.json();
  return posts;
};

export default TvTrending;
