// import { outfitMedium } from "@/app/layout";
import Trending from "@/actions/movie/trending/trending";
import HomeTrendingList from "./homeTrendungList";
const HomeTrending = async () => {
  const trending = await Trending();
  return (
    <>
      <HomeTrendingList posts={trending.results} details="movies" />
    </>
  );
};

export default HomeTrending;
