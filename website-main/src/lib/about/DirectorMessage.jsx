import React from "react";
import { Layout } from "../../layouts/Layout";
import { AboutFour } from "../../components/about/AboutFour";

import { BlogOne } from "../../components/blogs/BlogOne";

export const DirectorMessage = () => {
  return (
    <Layout header={9} footer={1}>
      {/* about */}
      <AboutFour />


      {/* blog */}
      <BlogOne />
    </Layout>
  );
};
