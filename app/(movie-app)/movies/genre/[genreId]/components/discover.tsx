import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import getDiscover from "@/actions/movie/get-discover";
import PageList from "../../../components/pageList";
import Container from "@/components/ui/container";
import getGenre from "@/actions/movie/get-genre";

interface genreAllProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

const DiscoverAll = async ({ params, searchParams }: genreAllProps) => {
  const paramse = await searchParams;
  const currentPage = parseInt((paramse.page as string) || "1");
  const pageSize = parseInt((paramse.pageSize as string) || "1");

  const { posts } = await getDiscover(params.genreId, currentPage);
  const collection = await getGenre();

  const selectedName = collection.genres.find(
    (genre: { id: number }) => genre.id === parseInt(params.genreId)
  );
  return (
    <>
      <Container>
        {selectedName ? (
          <h1
            key={selectedName.id}
            className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[1.5rem]"
          >
            {selectedName.name}
          </h1>
        ) : (
          "Name Not Found"
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
          <PageList posts={posts.results} details="movies" />
        </div>
        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={posts.total_pages}
        />
      </Container>
    </>
  );
};

export default DiscoverAll;
