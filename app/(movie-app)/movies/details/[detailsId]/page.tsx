import Details from "./components/details";

interface Props {
  params: Promise<{ detailsId: string }>;
}

const page = async ({ params }: Props) => {
  // const { detailsId } = await Promise.resolve(params);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const detailsId = (await params).detailsId;

  return (
    <div>
      <Details params={{ detailsId }} />
    </div>
  );
};

export default page;
