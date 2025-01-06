import SearchList from "./components/searchList";

interface PopularPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const SearchPage = async ({ searchParams }: PopularPageProps) => {
  const params = await searchParams;
  const query = params?.query || "";
  return (
    <>
      <SearchList query={query} searchParams={searchParams} />
    </>
  );
};

export default SearchPage;
