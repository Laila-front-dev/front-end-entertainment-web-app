const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { MoviesResponse } from "@/types";

const Tv = async (name: string): Promise<MoviesResponse> => {
  const res = await fetch(`${URL}/tv/${name}?api_key=${API_KEY}&page=1`);
  const posts = await res.json();
  return posts;
};

export default Tv;
