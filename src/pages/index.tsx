import { NextPage } from "next";
import { NextSeo } from "next-seo";

const IndexPage: NextPage = () => {
  return (
    <div>
      <NextSeo title="Index" />
      <h1>Hello from index</h1>
    </div>
  );
};

export default IndexPage;
