const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { DiscoverResponse } from "@/types";

const getDiscover = async (id: number, page: number) => {
  const res = await fetch(
    `${URL}/discover/movie?api_key=${API_KEY}&with_genres=${id}&page=${page}

    `
  );
  const posts: DiscoverResponse = await res.json();
  return { posts };
};

export default getDiscover;
