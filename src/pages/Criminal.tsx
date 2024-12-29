import DocumentButton from "../components/DocumentButton";
import PageTitle from "../components/PageTitle";
import Wrap from "../components/Wrap";

const Criminal = (): JSX.Element => {
  return (
    <>
    <PageTitle title="형사소송"/>
      <Wrap>
        <DocumentButton link="/plaint" name="고소장" />
        <DocumentButton link="/criminal_withdrawn" name="고소취하서" />
      </Wrap>
    </>
  );
};

export default Criminal;
