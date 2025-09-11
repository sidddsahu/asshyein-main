import React from "react";
import OtherCoursesSlider from "./OtherCourses";
import { Layout } from "../../layouts/Layout";

const OtherCoursePage = () => {
  return (
    <div>
      <Layout header={9} footer={1}>
        <div className='py-5 mt-5'>
          <OtherCoursesSlider />
        </div>
      </Layout>
    </div>
  );
};

export default OtherCoursePage;
