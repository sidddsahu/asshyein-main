import React from "react";
import { Layout } from "../../layouts/Layout";

import { DepartmentOne } from "../../components/departments/DepartmentOne";
import { VideoOne } from "../../components/videos/VideoOne";
import { BlogOne } from "../../components/blogs/BlogOne";
import { AboutThree } from "../../components/about/AboutThree";

export const AboutInstitute = () => {
  return (
    <Layout header={9} footer={1}>
      {/* about */}
      <AboutThree   />


      {/* blog */}
      <BlogOne />
    </Layout>
  );
};
