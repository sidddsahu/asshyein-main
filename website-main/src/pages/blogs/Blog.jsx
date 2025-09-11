import React from "react";
import { Layout } from "../../layouts/Layout";
import { BlogAll } from "../../components/blogs/BlogAll";
import OtherCoursesSlider from "../course/OtherCourses";
import MarqueeStrike from "../../components/popup/MarqueeStrike";

export const Blog = () => {
  // sourabh
  return (
    <Layout header={9} footer={1}>
      {/* <MarqueeStrike /> */}
      {/* <div className="td_height_10 td_height_lg_20" />
       <MarqueeStrike /> */}
      <BlogAll />

      <OtherCoursesSlider />
    </Layout>
  );
};
