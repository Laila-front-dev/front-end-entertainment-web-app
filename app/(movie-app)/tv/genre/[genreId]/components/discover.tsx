import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import getGenre from "@/actions/tv/get-genre";
import PageList from "../../../components/pageList";
import TvgetDiscover from "@/actions/tv/get-discover";

interface TrendingAllProps {
  searchParams: { [key: string]: string | undefined };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

const DiscoverAll = async ({ params, searchParams }: TrendingAllProps) => {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const pageSize = parseInt((searchParams.pageSize as string) || "1");

  const { posts } = await TvgetDiscover(params.genreId, currentPage);
  const collection = await getGenre();

  const selectedName = collection.genres.find(
    (genre) => genre.id === parseInt(params.genreId)
  );
  return (
    <Container>
      {selectedName ? (
        <h1
          key={selectedName.id}
          className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[2.063rem]"
        >
          {selectedName.name}
        </h1>
      ) : (
        "Name Not Found"
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px] pb-[12rem]">
        <PageList posts={posts.results} />
      </div>
      <PaginationWithLinks
        page={currentPage}
        pageSize={pageSize}
        totalCount={posts.total_pages}
      />
    </Container>
  );
};

export default DiscoverAll;
