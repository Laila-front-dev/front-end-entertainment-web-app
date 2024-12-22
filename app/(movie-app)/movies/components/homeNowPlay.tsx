import movies from "@/actions/movie/get-home-movies";
import PageList from "./pageList";

const HomePlayNow = async () => {
  const posts = await movies("now_playing");
  const slicePosts = posts.results.slice(0, 8);
  return (
    <>
      <PageList posts={slicePosts} />
    </>
  );
};

export default HomePlayNow;
