import movies from "@/actions/movie/get-home-movies";
import PageList from "./pageList";

const HomeTopMovie = async () => {
  const posts = await movies("top_rated");
  const slicePosts = posts.results.slice(0, 8);

  return (
    <>
      <PageList posts={slicePosts} details="movies" />
    </>
  );
};

export default HomeTopMovie;
