/* eslint-disable @typescript-eslint/no-explicit-any */
import getDetails from "@/actions/movie/get-details";
import Container from "@/components/ui/container";

import Image from "next/image";
import Link from "next/link";

interface Props {
  params: { detailsId: string };
}

const Details = async ({ params }: Props) => {
  const { detailsId } = await Promise.resolve(params);

  if (!detailsId) {
    return <div>Loading...</div>;
  }
  const details = await getDetails("movie", detailsId);

  return (
    <main>
      <section className="pt-9">
        <Container>
          <div className="md:flex gap-12 items-center md:items-start">
            <Image
              className="w-fit rounded-lg m-auto md:m-0"
              src={`https://image.tmdb.org/t/p/w500${details.posts.poster_path}`}
              alt={details.posts.original_title}
              width={350}
              height={530}
            />
            <div>
              <h1 className="pt-4 text-center md:pt-0 md:text-left text-4xl pb-7">
                {details.posts.original_title}
              </h1>
              <span className="text-neutral-500 text-base -10">
                {details.posts.tagline}
              </span>
              <ul className="flex gap-16 pt-7">
                <li className="grid">
                  <span className="text-base md:text-2xl text-neutral-500">
                    Length
                  </span>
                  <span>{details.posts.runtime} min</span>
                </li>
                {details.posts.spoken_languages.map((names: any) => (
                  <li key={names.id} className="grid">
                    <span className="text-base md:text-2xl text-neutral-500">
                      Language
                    </span>
                    <span>{names.name}</span>
                  </li>
                ))}
                <li className="grid">
                  <span className="text-base md:text-2xl text-neutral-500">
                    Year
                  </span>
                  <span>{details.posts.release_date}</span>
                </li>
              </ul>
              <p className="py-7">{details.posts.overview}</p>
              <ul className="flex gap-4">
                {details.posts.genres.map((names: any) => (
                  <li
                    key={names.id}
                    className="bg-white text-black rounded-lg p-2"
                  >
                    {names.name}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4 py-7">
                <Link
                  href={details.posts.homepage}
                  className="bg-secondary-400 rounded-lg p-2"
                  target="_blanck"
                >
                  Website
                </Link>
                <Link
                  href={`https://www.imdb.com/title/${details.posts.imdb_id}`}
                  className="bg-secondary-400 rounded-lg p-2"
                  target="_blanck"
                >
                  IMDB
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Details;
