import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import Container from "@/components/ui/container";
import getTv from "@/actions/tv/get-tv";
import PageList from "../../components/pageList";

interface TopAllProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TopAll = async ({ searchParams }: TopAllProps) => {
  const params = await searchParams;
  const currentPage = parseInt((params.page as string) || "1");
  const pageSize = parseInt((params.pageSize as string) || "1");
  const { posts } = await getTv("top_rated", currentPage);

  return (
    <Container>
      <h1 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[2.063rem]">
        tv series airing today
      </h1>
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

export default TopAll;
