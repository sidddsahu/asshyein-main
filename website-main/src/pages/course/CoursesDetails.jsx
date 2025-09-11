import React from "react";
import { Layout } from "../../layouts/Layout";
import { useParams } from "react-router-dom";
import { CouresesNine } from "../../components/courses/CouresesNine";
import { CourseDetailContent } from "../../components/courses/CourseDetailContent";

export const CoursesDetails = () => {
  const { id } = useParams();
  // const id useParams();
  return (
    <Layout
      header={9} footer={1}
    >
      {/* details */}
      <CourseDetailContent courseId={id} />

      {/* popular */}
      {/* <CouresesNine  /> */}
    </Layout>
  );
};
