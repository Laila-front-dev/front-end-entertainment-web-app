import { Metadata } from "next";
import Details from "./components/details";

interface Props {
  params: Promise<{ detailsId: string }>;
}

export const metadata: Metadata = {
  title: "details movie app",
  description: "details movie app",
};

const page = async ({ params }: Props) => {
  // const { detailsId } = await Promise.resolve(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detailsId = (await params).detailsId;

  return <Details params={{ detailsId }} />;
};

export default page;
