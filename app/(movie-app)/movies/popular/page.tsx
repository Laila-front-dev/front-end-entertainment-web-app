import PopularAll from "./components/Popular";

interface PopularPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PopularPage = async ({ searchParams }: PopularPageProps) => {
  return (
    <section className="pb-16">
      <PopularAll searchParams={searchParams} />
    </section>
  );
};

export default PopularPage;
