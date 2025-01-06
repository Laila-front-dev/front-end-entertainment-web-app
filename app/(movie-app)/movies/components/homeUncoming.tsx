import movies from "@/actions/movie/get-home-movies";
import PageList from "./pageList";

const HomeUncoming = async () => {
  const posts = await movies("upcoming");
  const slicePosts = posts.results.slice(0, 8);
  return (
    <>
      <PageList posts={slicePosts} details="movies" />
    </>
  );
};

export default HomeUncoming;
