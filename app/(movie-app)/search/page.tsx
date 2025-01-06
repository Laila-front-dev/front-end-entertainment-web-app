import { Suspense } from "react";
import SearchList from "./components/searchList";

interface PopularPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SearchPage = async ({ searchParams }: PopularPageProps) => {
  const params = await searchParams;
  const query = params?.query || "";
  return (
    <>
      <Suspense>
        <SearchList query={query} searchParams={searchParams} />
      </Suspense>
    </>
  );
};

export default SearchPage;
