import Details from "./components/details";

interface Props {
  params: { [key: string]: string };
}

const page = ({ params }: Props) => {
  return (
    <div>
      <Details params={params} />
    </div>
  );
};

export default page;
