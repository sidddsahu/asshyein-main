import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MpSidebar from "./MpSidebar";
import FoundationCourses from "./FoundationCourse";
import TargetJudiciaryCourse from "./TargetJudiciary";
import PrelimsTestSeries from "./PrelimsTestSeries";
import MainsTestSeries from "./MainsTestSeries";
import { Layout } from "../../layouts/Layout";
import { CoursesAllGrid } from "../../components/courses/CoursesAllGrid";
import { fetchSubcategory, fetchcategory } from "../../api";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import axios from "axios";
import { base_url } from "../../utils/base_url";
import OtherCoursesSlider from "./OtherCourses";

const CourseLayout = () => {
  const [activeTab, setActiveTab] = useState("foundation");
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(""); // DATA

  // console.log(selectedSubCategoryId, "kio");

  const [subCategoryShow, setSubCategoryShow] = useState([]);
  const { id } = useParams();

  // console.log(id, "ididididididid");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchInitialData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${base_url}subsubcategory/${id}`);
        console.log(res, ":RES DATA");
        setSubCategoryShow(res.data);
        setSelectedCategoryId(res.data.category);
        setSelectedSubCategoryId(res.data._id);
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
      selectedCategoryId={subCategoryShow}  // For subsubCategory filtering
      selectedSubCategoryId={selectedSubCategoryId}  // For subcategory filtering
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
            selectedCategoryId={subCategoryShow}
            selectedSubCategoryId={id}

          />
        );
    }
  };

  {
    loading ? <div>Loading...</div> : renderContent();
  }

  return (
    <Layout header={9} footer={1}>

      <Container fluid>
        <Row>
          <CoursesAllGrid selectedSubCategoryId={selectedSubCategoryId} />
          <Col md={4} lg={2} className="p-0">

            <MpSidebar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              setSelectedCategoryId={setSelectedCategoryId}
              setSelectedSubCategoryId={setSelectedSubCategoryId}
            />
          </Col>
          <Col md={8} lg={10} className="">
            <h3 className="td_fs_10  ms-3">{subCategoryShow.name}</h3>
            {renderContent()}
          </Col>
        </Row>
      </Container>
      <OtherCoursesSlider />
    </Layout>
  );
};

export default CourseLayout;
