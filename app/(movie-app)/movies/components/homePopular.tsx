import movies from "@/actions/movie/get-home-movies";
import PageList from "./pageList";

const HomePopular = async () => {
  const posts = await movies("popular");
  const slicePosts = posts.results.slice(0, 8);

  return (
    <>
      <PageList posts={slicePosts} />
    </>
  );
};

export default HomePopular;
