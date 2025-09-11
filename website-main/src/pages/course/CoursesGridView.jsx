import React from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { CoursesAllContainer } from "../../components/courses/CoursesAllContainer";

export const CoursesGridView = () => {
  return (
     <Layout header={9} footer={1}>

        <CoursesAllGrid />
     
    </Layout>
  );
};
