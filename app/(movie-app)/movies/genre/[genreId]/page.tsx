import DiscoverAll from "./components/discover";

interface genrePageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}

const TrendingPage = async ({ params, searchParams }: genrePageProps) => {
  return (
    <main>
      <section>
        <DiscoverAll params={params} searchParams={searchParams} />
      </section>
    </main>
  );
};

export default TrendingPage;
