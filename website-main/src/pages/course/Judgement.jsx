import React, { useState } from "react";
import { Layout } from "../../layouts/Layout";
import { CoursesAllContainerSidebar } from "../../components/courses/CoursesAllContainerSidebar";
import { CoursesAllList } from "../../components/courses/CoursesAllList";
import OtherCoursesSlider from "./OtherCourses";

export const Judgement = () => {
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);

  const handleCategorySelect = (category) => {
    // console.log("Selected category ID:", category.id); // Debug log
    setSelectedCategoryId(category.id);
  };

  return (
    <Layout>
      <CoursesAllContainerSidebar
        isGrid
        onCategorySelect={handleCategorySelect}
        selectedCategoryId={selectedCategoryId}
      >
        <CoursesAllList selectedCategoryId={selectedCategoryId} />
      </CoursesAllContainerSidebar>
      <OtherCoursesSlider />
    </Layout>
  );
};
