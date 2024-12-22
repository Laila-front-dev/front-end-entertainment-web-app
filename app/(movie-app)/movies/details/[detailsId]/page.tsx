import Details from "./components/details";

interface Props {
  params: { detailsId: string };
}

const page = async ({ params }: Props) => {
  const { detailsId } = await Promise.resolve(params);

  if (!detailsId) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Details params={{ detailsId }} />
    </div>
  );
};

export default page;
