const URL = process.env.NEXT_PUBLIC_API_URL;
const API_KEY = process.env.API_KEY;

import { DetailsResponse } from "@/types";

const getDetails = async (id: unknown) => {
  const res = await fetch(
    `${URL}/tv/${id}?api_key=${API_KEY}

    `
  );
  const posts: DetailsResponse = await res.json();
  return { posts };
};

export default getDetails;
