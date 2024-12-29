import DocumentButton from "../components/DocumentButton";
import PageTitle from "../components/PageTitle";
import Wrap from "../components/Wrap";

const Civil = (): JSX.Element => {
  return (
    <>
    <PageTitle title="민사소송"/>
      <Wrap>
        <DocumentButton link="/civil_litigation_complaint" name="소장" />
        <DocumentButton link="/jurisdiction" name="관할합의서" />
        <DocumentButton link="/withdraw" name="소취하서" />
        <DocumentButton link="/partially_withdrawn" name="소일부취하서" />
        <DocumentButton link="/suspension" name="소취하에 대한 이의신청서" />
      </Wrap>
    </>
  );
};

export default Civil;
