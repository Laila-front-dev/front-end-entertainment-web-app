const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { MoviesResponse } from "@/types";

const getSearch = async (name: string, search: string, id: number) => {
  const res = await fetch(
    `${URL}/search/${name}?query=${search}&api_key=${API_KEY}&page=${id}

    `
  );
  const posts: MoviesResponse = await res.json();
  return { posts };
};

export default getSearch;
