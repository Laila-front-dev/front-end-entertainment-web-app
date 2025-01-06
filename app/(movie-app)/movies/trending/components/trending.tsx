import getTrending from "@/actions/movie/trending/get-trending";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import PageList from "../../components/pageList";
// import PageList from "../../components/pageList";

interface TrendingAllProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TrendingAll = async ({ searchParams }: TrendingAllProps) => {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const pageSize = parseInt((params.pageSize as string) || "1");
  const { posts } = await getTrending(currentPage);

  return (
    <>
      <Container>
        <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[1.5rem]">
          Trending movies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
          <PageList posts={posts.results} details="movies" />
        </div>
      </Container>
      <Container>
        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={posts.total_pages}
        />
      </Container>
    </>
  );
};

export default TrendingAll;
