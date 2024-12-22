/* eslint-disable @typescript-eslint/no-explicit-any */
import getDetails from "@/actions/movie/get-details";
import Container from "@/components/ui/container";
import Link from "next/link";
import Image from "next/image";

interface Props {
  params: { [key: string]: string | undefined };
}

const Details = async ({ params }: Props) => {
  const details = await getDetails("tv", params.detailsId);

  return (
    <main>
      <section className="pt-9">
        <Container>
          <div className="flex gap-12">
            <Image
              className="w-fit rounded-lg"
              src={`https://image.tmdb.org/t/p/w500${details.posts.poster_path}`}
              alt={details.posts.original_name}
              width={350}
              height={530}
            />
            <div>
              <h1 className="text-4xl pb-7">{details.posts.original_name}</h1>
              <span className="text-neutral-500 text-base -10">
                {details.posts.tagline}
              </span>
              <ul className="flex gap-16 pt-7">
                {details.posts.spoken_languages.map((names: any) => (
                  <li key={names.id} className="grid">
                    <span className="text-2xl text-neutral-500">Language</span>
                    <span>{names.name}</span>
                  </li>
                ))}
                <li className="grid">
                  <span className="text-2xl text-neutral-500">First Air</span>
                  <span>{details.posts.first_air_date}</span>
                </li>
                <li className="grid">
                  <span className="text-2xl text-neutral-500">Last Air</span>
                  <span>{details.posts.last_air_date}</span>
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
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default Details;
