import Details from "./components/details";

interface Props {
  params: { [key: string]: string | undefined };
}

const page = async ({ params }: Props) => {
  const awaitedParams = await params;
  const { detailsId } = awaitedParams;

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
