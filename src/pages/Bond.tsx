import DocumentButton from "../components/DocumentButton";
import PageTitle from "../components/PageTitle";
import Wrap from "../components/Wrap";

const Bond = (): JSX.Element => {
  return (
    <>
    <PageTitle title="채권 채무"/>
      <Wrap>
        <DocumentButton link="/iou" name="금전차용증서" />
        <DocumentButton link="/waiver" name="포기각서" />
        <DocumentButton link="/reminder" name="독촉장" />
        <DocumentButton link="/memorandum" name="각서" />
      </Wrap>
    </>
  );
};

export default Bond;
