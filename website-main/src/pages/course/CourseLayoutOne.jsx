import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MpSidebar from "./MpSidebar";
import FoundationCourses from "./FoundationCourse";
import TargetJudiciaryCourse from "./TargetJudiciary";
import PrelimsTestSeries from "./PrelimsTestSeries";
import MainsTestSeries from "./MainsTestSeries";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import OtherCoursesSlider from "./OtherCourses";

const CourseLayoutOne = () => {
  const [activeTab, setActiveTab] = useState("foundation");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState("");
  const [subCategoryShow, setSubCategoryShow] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${base_url}subsubcategory/${id}`);
        setSubCategoryShow(res.data);
        setSelectedCategoryId(res.data.category);
        setSelectedSubCategoryId(res.data._id);

        console.log("🚀 SubCategory Data:", res.data);
      } catch (error) {
        toast.error("Failed to load subcategory.");
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchInitialData();
  }, [id]);

  const renderContent = () => {
    switch (activeTab) {
      case "Recorded":
        return (
          <TargetJudiciaryCourse
            selectedCategoryId={subCategoryShow}
            selectedSubCategoryId={selectedSubCategoryId}
          />
        );
      case "prelims":
        return (
          <PrelimsTestSeries
            selectedCategoryId={subCategoryShow}
            selectedSubCategoryId={selectedSubCategoryId}
          />
        );
      case "mains":
        return (
          <MainsTestSeries
            selectedCategoryId={subCategoryShow}
            selectedSubCategoryId={selectedSubCategoryId}
          />
        );
      case "foundation":
      default:
        return (
          <FoundationCourses
            selectedCategoryId={subCategoryShow.category} // this is the category _id
            selectedSubCategoryId={id} // subsubcategory ID
            useNewFilter={true}
          />
        );
    }
  };

  return (
    <Layout header={9} footer={1}>
      <Container fluid>
        <Row>
          {/* Top Filter Grid (could be your category header section) */}
          <CoursesAllGrid selectedSubCategoryId={selectedSubCategoryId} />

          {/* Sidebar (Left) */}
          <Col md={4} lg={2} className="p-0">
            <MpSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setSelectedCategoryId={setSelectedCategoryId}
              setSelectedSubCategoryId={setSelectedSubCategoryId}
            />
          </Col>

          {/* Main Course Section (Right) */}
          <Col md={8} lg={10}>
            <h3 className="td_fs_10 ms-3">{subCategoryShow.name}</h3>
            {loading ? <div className="ms-3">Loading...</div> : renderContent()}
          </Col>
        </Row>
      </Container>

      {/* Slider at Bottom */}
      <OtherCoursesSlider />
    </Layout>
  );
};

export default CourseLayoutOne;
