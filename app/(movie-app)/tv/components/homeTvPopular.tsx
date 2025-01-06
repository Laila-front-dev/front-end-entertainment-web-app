import Tv from "@/actions/tv/get-home-tv";
// import PageList from "./pageList";
import PageList from "../../movies/components/pageList";

const HomeTvPopular = async () => {
  const posts = await Tv("popular");
  const slicePosts = posts.results.slice(0, 8);
  return (
    <>
      <PageList posts={slicePosts} details="tv" />
    </>
  );
};

export default HomeTvPopular;
