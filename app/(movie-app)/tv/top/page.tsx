import TopAll from "./components/top";

interface PopularPageProps {
  searchParams: { [key: string]: string | undefined };
}

const PopularPage = async ({ searchParams }: PopularPageProps) => {
  return (
    <main>
      <section className="pb-16">
        <TopAll searchParams={searchParams} />
      </section>
    </main>
  );
};

export default PopularPage;
