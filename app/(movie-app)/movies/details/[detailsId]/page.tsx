import Details from "./components/details";
import { FC } from "react";

interface PageProps {
  params: { detailsId: string };
}

const page: FC<PageProps> = async ({ params }) => {
  const { detailsId } = await params;
  return (
    <div>
      <Details params={{ detailsId }} />
    </div>
  );
};

export default page;
