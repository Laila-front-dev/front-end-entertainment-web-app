const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { MoviesResponse } from "@/types";

const getMovies = async (name: string, id: number) => {
  const res = await fetch(
    `${URL}/tv/${name}?api_key=${API_KEY}&page=${id}

    `
  );
  const posts: MoviesResponse = await res.json();
  return { posts };
};

export default getMovies;
