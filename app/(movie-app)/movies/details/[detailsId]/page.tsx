import Details from "./components/details";
import { FC } from "react";

interface PageProps {
  params: { detailsId: string };
}

const page: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <Details params={params} />
    </div>
  );
};

export default page;
