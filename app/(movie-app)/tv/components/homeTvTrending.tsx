import TvTrending from "@/actions/tv/trending";
import HomeTvTrendingList from "./homeTvTrendingList";

const HomeTvTrending = async () => {
  const tvTrending = await TvTrending();
  return <HomeTvTrendingList posts={tvTrending.results} />;
};

export default HomeTvTrending;
