import { Suspense } from "react";
import NowPlayAll from "./components/now";

interface NowPlatPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

const NowPlatPage = async ({ searchParams }: NowPlatPageProps) => {
  return (
    <section className="pb-16">
      <Suspense>
        <NowPlayAll searchParams={searchParams} />
      </Suspense>
    </section>
  );
};

export default NowPlatPage;
