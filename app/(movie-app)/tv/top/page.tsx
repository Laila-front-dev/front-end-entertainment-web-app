import TopAll from "./components/top";

interface TopPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const TopPage = async ({ searchParams }: TopPageProps) => {
  return (
    <main>
      <section className="pb-16">
        <TopAll searchParams={searchParams} />
      </section>
    </main>
  );
};

export default TopPage;
