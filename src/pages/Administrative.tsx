import DocumentButton from "../components/DocumentButton";
import PageTitle from "../components/PageTitle";
import Wrap from "../components/Wrap";

const Administrative = (): JSX.Element => {
  return (
    <>
    <PageTitle title="행정소송"/>
      <Wrap>
        <DocumentButton link="/adminComplaint" name="소장" />
        <DocumentButton link="/judgment" name="행정심판 청구" />
      </Wrap>
    </>
  );
};

export default Administrative;
