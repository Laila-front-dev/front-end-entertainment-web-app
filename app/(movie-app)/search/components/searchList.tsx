import getSearch from "@/actions/get-search";
import Container from "@/components/ui/container";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import PageList from "../../movies/components/pageList";

interface PopularAllProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  query: string | string[];
}

const SearchList = async ({ searchParams }: PopularAllProps) => {
  const params = await searchParams;

  const currentPage = parseInt((params.page as string) || "1");
  const pageSize = parseInt((params.pageSize as string) || "1");
  const query = params.query as string;

  const searchMovies = await getSearch("multi", query, currentPage);

  return (
    <section className="px-4">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
          {searchMovies.posts.results.map((post) => (
            <>
              <PageList
                posts={[post]}
                details={post.media_type === "movie" ? "movies" : "tv"}
              />
            </>
          ))}
        </div>
        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={searchMovies.posts.total_pages}
        />
      </Container>
    </section>
  );
};

export default SearchList;
