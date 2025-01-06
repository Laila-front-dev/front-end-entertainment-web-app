import Tv from "@/actions/tv/get-home-tv";
import PageList from "../../movies/components/pageList";
// import PageList from "./pageList";

const HomeTvAiring = async () => {
  const posts = await Tv("airing_today");
  const slicePosts = posts.results.slice(0, 8);
  return (
    <>
      <PageList posts={slicePosts} details="tv" />
    </>
  );
};

export default HomeTvAiring;
