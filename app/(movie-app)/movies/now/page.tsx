import NowPlayAll from "./components/now";

interface NowPlatPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const NowPlatPage = async ({ searchParams }: NowPlatPageProps) => {
  return (
    <section className="pb-16">
      <NowPlayAll searchParams={searchParams} />
    </section>
  );
};

export default NowPlatPage;
