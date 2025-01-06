import Upcoming from "./components/upcoming";

interface TopPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TopPage = async ({ searchParams }: TopPageProps) => {
  return (
    <section className="pb-16">
      <Upcoming searchParams={searchParams} />
    </section>
  );
};

export default TopPage;
