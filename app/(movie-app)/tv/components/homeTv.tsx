import Container from "@/components/ui/container";
import HomeTvTopRated from "./homeTopRated";
import Link from "next/link";
import HomeTvOnTheAir from "./homeOnTheAir";
import HomeTvAiring from "./homeAiring";
import HomeTvPopular from "./homeTvPopular";
import HomeTvTrending from "./homeTvTrending";

function HomeTv() {
  return (
    <>
      <section className="pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px] py-[2.063rem]">
              Trending TV
            </h2>
            <Link
              href="/tv/trending"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="max-w-full h-fit overflow-x-scroll scrollbar">
            <div className="flex w-fit gap-10 mb-2">
              <HomeTvTrending />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              popular TV
            </h2>
            <Link
              href="/tv/popular"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
            <HomeTvPopular />
          </div>
        </Container>
      </section>
      <section className="pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              Airing Today TV
            </h2>
            <Link
              href="/tv/airing"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
            <HomeTvAiring />
          </div>
        </Container>
      </section>
      <section className="pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              On The Air TV
            </h2>
            <Link
              href="/tv/onair"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
            <HomeTvOnTheAir />
          </div>
        </Container>
      </section>
      <section className="pt-9">
        <Container>
          <div className="flex justify-between items-center">
            <h2 className="text-[1.25rem] lg:text-[2rem] capitalize tracking-[-0.5px]">
              Top Rated TV
            </h2>
            <Link
              href="/tv/top"
              className="border p-2 text-base capitalize rounded-lg hover:bg-secondary-400 hover:border-secondary-400 transition-all duration-300 ease-in-out"
            >
              show more
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[40px]">
            <HomeTvTopRated />
          </div>
        </Container>
      </section>
    </>
  );
}

export default HomeTv;
