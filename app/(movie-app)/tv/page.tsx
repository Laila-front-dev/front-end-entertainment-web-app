/* eslint-disable @typescript-eslint/no-explicit-any */
import getGenre from "@/actions/tv/get-genre";
import Link from "next/link";
import Container from "@/components/ui/container";
import { outfitMedium } from "@/app/layout";

const CollectionPage = async () => {
  const collection = await getGenre();

  return (
    <main>
      <section className="pt-16">
        <Container>
          <div className="grid md:grid-cols-3  lg:grid-cols-5 gap-4 justify-center justify-items-center">
            {collection.genres.map((post: any) => (
              <div
                key={post.id}
                className={`bg-primary-100 text-primary-900 rounded-lg w-[195px] h-[120px] flex justify-center items-center text-lg ${outfitMedium.className}`}
              >
                <Link href={`/tv/genre/${post.id}`}>{post.name}</Link>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CollectionPage;
