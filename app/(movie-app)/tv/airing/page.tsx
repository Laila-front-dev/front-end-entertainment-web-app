import AiringAll from "./components/airing";

interface PopularPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PopularPage = async ({ searchParams }: PopularPageProps) => {
  return (
    <section className="pb-16">
      <AiringAll searchParams={searchParams} />
    </section>
  );
};

export default PopularPage;
