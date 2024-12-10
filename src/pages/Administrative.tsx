import DocumentButton from "../components/DocumentButton";
import Wrap from "../components/Wrap";

const Administrative = (): JSX.Element => {
  return (
    <Wrap>
      <DocumentButton link="/adminComplaint" name="소장" />
      <DocumentButton link="/judgment" name="행정심판 청구" />
    </Wrap>
  );
};

export default Administrative;
