import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import PageList from "../../components/pageList";
import getMovies from "@/actions/movie/get-movies";

interface UpcomingProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Upcoming = async ({ searchParams }: UpcomingProps) => {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const pageSize = parseInt((params.pageSize as string) || "1");
  const { posts } = await getMovies("upcoming", currentPage);

  return (
    <>
      <Container>
        <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[1.5rem]">
          Upcoming movies
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

export default Upcoming;
