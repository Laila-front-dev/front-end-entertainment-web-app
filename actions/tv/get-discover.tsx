const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { TvDiscoverResponse } from "@/types";

const TvgetDiscover = async (id: number, page: number) => {
  const res = await fetch(
    `${URL}/discover/tv?api_key=${API_KEY}&with_genres=${id}&page=${page}

    `
  );
  const posts: TvDiscoverResponse = await res.json();
  return { posts };
};

export default TvgetDiscover;
