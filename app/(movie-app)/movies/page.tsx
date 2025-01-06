/* eslint-disable @typescript-eslint/no-explicit-any */
import getGenre from "@/actions/movie/get-genre";
import Link from "next/link";
import Container from "@/components/ui/container";
// import localFont from "next/font/local";

// export const outfitMedium = localFont({
//   src: "./fonts/OutfitMedium.woff",
//   weight: "500",
// });

const CollectionPage = async () => {
  const collection = await getGenre();

  return (
    <section className="pt-9">
      <Container>
        <div className="grid md:grid-cols-3  lg:grid-cols-5 gap-4 justify-center justify-items-center">
          {collection.genres.map((post: any) => (
            <div
              key={post.id}
              className={`bg-primary-100 text-primary-900 rounded-lg w-[195px] h-[120px] flex justify-center items-center text-lg`}
            >
              <Link href={`/movies/genre/${post.id}`}>{post.name}</Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CollectionPage;
