import OnAiringAll from "./components/onair";

interface PopularPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const PopularPage = async ({ searchParams }: PopularPageProps) => {
  return (
    <section className="pb-16">
      <OnAiringAll searchParams={searchParams} />
    </section>
  );
};

export default PopularPage;
