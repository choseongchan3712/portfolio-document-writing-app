import DocumentButton from "../components/DocumentButton";
import Wrap from "../components/Wrap";

const Criminal = (): JSX.Element => {
  return <Wrap>
    <DocumentButton link="/plaint" name="고소장" />
    <DocumentButton link="/criminal_withdrawn" name="고소취하서" />
  </Wrap>;
};

export default Criminal;
