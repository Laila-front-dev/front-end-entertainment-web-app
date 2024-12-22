import Container from "@/components/ui/container";
import HomeUncoming from "./homeUncoming";
import Link from "next/link";
import HomePopular from "./homePopular";
import HomePlayNow from "./homeNowPlay";
import HomeTopMovie from "./homeTopMovie";
import HomeTrending from "./homeTrending";
import { Suspense } from "react";
import Loading from "../../loading";

function HomeMovies() {
  return (
    <>
      <section>
        <Suspense fallback={<Loading />}>
          <Container>
            <div className="flex justify-between items-center">
              <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[2.063rem]">
                trending movies
              </h2>
              <Link
                href="/movies/trending"
                className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
              >
                show more
              </Link>
            </div>
            <div className="max-w-full h-fit overflow-x-scroll scrollbar">
              <div className="flex w-fit gap-10 mb-2">
                <HomeTrending />
              </div>
            </div>
          </Container>
        </Suspense>
      </section>
      <section className="pt-9 pb-[8rem]">
        <Suspense fallback={<Loading />}>
          <Container>
            <div className="flex justify-between items-center">
              <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
                popular movies
              </h2>
              <Link
                href="/movies/popular"
                className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
              >
                show more
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px]">
              <HomePopular />
            </div>
          </Container>
        </Suspense>
      </section>
      <section className="pt-9 pb-[8rem]">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              Play Now movies
            </h2>
            <Link
              href="/movies/now"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px]">
            <HomePlayNow />
          </div>
        </Container>
      </section>
      <section className="pt-9 pb-[8rem]">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              Top movies
            </h2>
            <Link
              href="/movies/top"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px]">
            <HomeTopMovie />
          </div>
        </Container>
      </section>
      <section className="pt-9 pb-[8rem]">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              Upcoming movies
            </h2>
            <Link
              href="/movies/upcoming"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px] gap-y-[80px]">
            <HomeUncoming />
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomeMovies;
