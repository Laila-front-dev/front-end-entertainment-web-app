// const URL = process.env.NEXT_PUBLIC_API_URL;
// const API_KEY = process.env.API_KEY;

import { DetailsResponse } from "@/types";

const getBook = async (id: unknown) => {
  const res = await fetch(
    `http://localhost:3000/api/categories?userId=${id}

    `
  );
  const posts: DetailsResponse = await res.json();
  return { posts };
};

export default getBook;
