import { Helmet } from "react-helmet-async";

interface PageTitleType {
  title: string;
}

const PageTitle = ({title}:PageTitleType) => {
  return <Helmet>
    <title>{title} | 로폼</title>
  </Helmet>;
};

export default PageTitle;