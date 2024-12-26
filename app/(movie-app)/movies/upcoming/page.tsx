import Upcoming from "./components/upcoming";

interface TopPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TopPage = async ({ searchParams }: TopPageProps) => {
  return (
    <main>
      <section className="pb-16">
        <Upcoming searchParams={searchParams} />
      </section>
    </main>
  );
};

export default TopPage;
