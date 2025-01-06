import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import getTv from "@/actions/tv/get-tv";
import PageList from "@/app/(movie-app)/movies/components/pageList";
// import PageList from "../../components/pageList";

interface PopularAllProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PopularAll = async ({ searchParams }: PopularAllProps) => {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const pageSize = parseInt((params.pageSize as string) || "1");
  const { posts } = await getTv("popular", currentPage);

  return (
    <>
      <Container>
        <h1 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[1.5rem]">
          popular tv
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
          <PageList posts={posts.results} details="tv" />
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

export default PopularAll;
