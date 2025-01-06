"use client";

import Container from "@/components/ui/container";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

const Search = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";
  const [searchQuery, setSearchQuery] = useState(query);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (searchQuery) {
      params.set("query", searchQuery);
    } else {
      params.delete("query");
    }
    router.push(`/search?${params.toString()}`);
    setSearchQuery("");
  };

  return (
    <section>
      <Container>
        <form
          onSubmit={handleSearch}
          className="relative flex items-center flex-row-reverse justify-between w-full "
        >
          <input
            className="w-full p-2 mt-[1.438rem] text-white border-none bg-transparent focus:outline-none focus:border-white focus:border-b-[1px] focus:border-solid"
            name="query"
            placeholder="Search for movies, TV series"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="mt-[1.438rem]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fill-rule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </form>
      </Container>
    </section>
  );
};

export default Search;
