import NowPlayAll from "./components/now";

interface NowPlatPageProps {
  searchParams: { [key: string]: string | undefined };
}

const NowPlatPage = async ({ searchParams }: NowPlatPageProps) => {
  return (
    <main>
      <section className="pb-16">
        <NowPlayAll searchParams={searchParams} />
      </section>
    </main>
  );
};

export default NowPlatPage;
