import Details from "./components/details";

interface Props {
  params: Promise<{ detailsId: string }>;
}

const page = async ({ params }: Props) => {
  const detailsId = (await params).detailsId;
  return (
    <div>
      <Details params={{ detailsId }} />
    </div>
  );
};

export default page;
