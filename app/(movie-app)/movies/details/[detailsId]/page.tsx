import Details from "./components/details";
import { FC } from "react";

interface PageProps {
  params: { [key: string]: string | undefined };
}

const page: FC<PageProps> = ({ params }) => {
  return (
    <div>
      <Details params={params} />
    </div>
  );
};

export default page;
