import DiscoverAll from "./components/discover";

interface TrendingPageProps {
  searchParams: { [key: string]: string | undefined };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

const TrendingPage = async ({ params, searchParams }: TrendingPageProps) => {
  return (
    <main>
      <section>
        <DiscoverAll params={params} searchParams={searchParams} />
      </section>
    </main>
  );
};

export default TrendingPage;
