import TrendingAll from "./components/trending";

interface TrendingPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TrendingPage = async ({ searchParams }: TrendingPageProps) => {
  return (
    <main>
      <section className="pb-16">
        <TrendingAll searchParams={searchParams} />
      </section>
    </main>
  );
};

export default TrendingPage;
