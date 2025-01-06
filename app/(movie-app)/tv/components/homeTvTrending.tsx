import TvTrending from "@/actions/tv/trending";
// import HomeTvTrendingList from "./homeTvTrendingList";
import HomeTrendingList from "../../movies/components/homeTrendungList";

const HomeTvTrending = async () => {
  const tvTrending = await TvTrending();
  return <HomeTrendingList posts={tvTrending.results} details="tv" />;
};

export default HomeTvTrending;
