// import Header from "@/components/header";

import HomeMovies from "./movies/components/homeMovies";
import HomeTv from "./tv/components/homeTv";

export default function Home() {
  return (
    // <main className="overflow-hidden">
    <>
      {/* MOVIES */}
      <HomeMovies />
      {/* TV */}
      <HomeTv />
    </>
    // </main>
  );
}
