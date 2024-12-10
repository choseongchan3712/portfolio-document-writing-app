import DocumentButton from "../components/DocumentButton";
import Wrap from "../components/Wrap";

const Administrative = (): JSX.Element => {
  return (
    <Wrap>
      <DocumentButton link="/adminComplaint" name="소장" />
      <DocumentButton link="/judgment" name="행정심판 청구" />
      <DocumentButton link="/withdraw" name="소취하서" />
      <DocumentButton link="/partially_withdrawn" name="소일부취하서" />
      <DocumentButton link="/suspension" name="소취하에 대한 이의신청서" />
    </Wrap>
  );
};

export default Administrative;
