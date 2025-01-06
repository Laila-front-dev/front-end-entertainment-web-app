import PopularAll from "./components/popular";

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
