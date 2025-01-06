import Tv from "@/actions/tv/get-home-tv";
// import PageList from "./pageList";
import PageList from "../../movies/components/pageList";

const HomeTvOnTheAir = async () => {
  const posts = await Tv("on_the_air");
  const slicePosts = posts.results.slice(0, 8);
  return (
    <>
      <PageList posts={slicePosts} details="tv" />
    </>
  );
};

export default HomeTvOnTheAir;
