import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import PageList from "../../components/pageList";
import getMovies from "@/actions/movie/get-movies";

interface PopularAllProps {
  searchParams: { [key: string]: string | undefined };
}

const PopularAll = async ({ searchParams }: PopularAllProps) => {
  const currentPage = parseInt((searchParams.page as string) || "1");
  const pageSize = parseInt((searchParams.pageSize as string) || "1");
  const { posts } = await getMovies("popular", currentPage);

  return (
    <Container>
      <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[2.063rem]">
        popular movies
      </h2>
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

export default PopularAll;
