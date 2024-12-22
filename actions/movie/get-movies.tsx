const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { MoviesResponse } from "@/types";

const getMovies = async (name: string, id: number) => {
  const res = await fetch(
    `${URL}/movie/${name}?api_key=${API_KEY}&page=${id}

    `
  );
  const posts: MoviesResponse = await res.json();
  return { posts };
};

export default getMovies;

// https://api.themoviedb.org/3/movie/912649?api_key=f7f51a93edb776d965c66b2ef6bc7b58
