
// export default TargetJudiciaryCourse;
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Card, Button, Modal } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const TargetJudiciaryCourse = ({ selectedCategoryId }) => {
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDemoUrl, setSelectedDemoUrl] = useState(null);
  const [selectedDemoTitle, setSelectedDemoTitle] = useState(null);

  const { category, subcategory, subsubcategory } = useParams();

  // ✅ Dummy Static Data
  const dummyCourses = [
    {
      _id: "course1",
      Coursename: "Mp Judiciary Examination",
      category: "Recorded Course",
      subCategory: { name: "Target Judiciary" },
      subsubCategory: { name: "Mp Judiciary" },
      Price: "4999",
      Durations: "6 Months",
      TrainerName: "Prof. Sharma",
      URL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: "https://via.placeholder.com/400x250",
    },
    {
      _id: "course2",
      Coursename: "Mp Judiciary Examination",
      category: "Recorded Course",
      subCategory: { name: "Target Judiciary" },
      subsubCategory: { name: "Mp Judiciary" },
      Price: "2999",
      Durations: "2 Months",
      TrainerName: "Dr. Kapoor",
      URL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: "https://via.placeholder.com/400x250",
    },

     {
      _id: "course2",
      Coursename: "Mp Judiciary Examination",
      category: "Recorded Course",
      subCategory: { name: "Target Judiciary" },
      subsubCategory: { name: "Mp Judiciary" },
      Price: "2999",
      Durations: "2 Months",
      TrainerName: "Dr. Kapoor",
      URL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      images: "https://via.placeholder.com/400x250",
    },

  ];

  useEffect(() => {
    filterCourses();
  }, [category, subcategory, subsubcategory, selectedCategoryId]);

  const filterCourses = () => {
    let filtered = [...dummyCourses];

    if (category) {
      filtered = filtered.filter(
        (course) => course.category?.toLowerCase() === category.toLowerCase()
      );
    }

    if (subcategory) {
      filtered = filtered.filter(
        (course) =>
          course.subCategory?.name?.toLowerCase() === subcategory.toLowerCase()
      );
    }

    if (
      selectedCategoryId &&
      typeof selectedCategoryId.name === "string" &&
      selectedCategoryId.name.trim() !== ""
    ) {
      filtered = filtered.filter(
        (course) =>
          course.subsubCategory?.name?.toLowerCase() ===
          selectedCategoryId.name.toLowerCase()
      );
    }

    setFilteredCourses(filtered);
  };

  const handleOpenDemo = (url, title) => {
    setSelectedDemoUrl(url);
    setSelectedDemoTitle(title);
    setShowModal(true);
  };

  const handleCloseDemo = () => {
    setSelectedDemoUrl(null);
    setSelectedDemoTitle(null);
    setShowModal(false);
  };

  const sanitizeHtml = (html) => {
    return DOMPurify.sanitize(html);
  };

  return (
    <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
      <div className="container">
        <div className="row justify-content-center">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course._id} className="col-md-4 mb-4">
                <Link to={`/courses/${course._id}`} className="btn w-100 mb-2">
                  <Card className="h-100 shadow-sm border-0">
                    <Card.Img
                      variant="top"
                      src={course.images || "https://via.placeholder.com/300x200"}
                      alt={course.Coursename || "Course Image"}
                    />
                    <Card.Body className="p-3">
                      <div className="text-center fw-bold fs-5 mb-2">
                        {course.subCategory?.name || "N/A"}
                      </div>
                      <div className="small">
                        <CourseDetail label="Judiciary:" value={course?.subsubCategory?.name} />
                        <CourseDetail label="Price:" value={`₹ ${course.Price}`} />
                        <CourseDetail label="Duration:" value={course.Durations} />
                        <CourseDetail label="Faculty:" value={course.TrainerName} />
                        <CourseDetail label="Type:" value={course.category} />
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0 p-3 pt-0">
                      <Link
                        to={`/courses/${course._id}`}
                        className="btn w-100 mb-2"
                        style={{ background: "#C81A1E", color: "white" }}
                      >
                        View Details
                      </Link>
                      <div className="d-flex gap-2">
                        {course.URL && (
                          <Button
                            variant="outline-danger"
                            className="w-50 btn-sm"
                            onClick={() => handleOpenDemo(course.URL, course.Coursename)}
                          >
                            Free Demo
                          </Button>
                        )}
                        <Link className="w-50" to={`/courses/${course._id}`}>
                          <Button variant="outline-dark" className="w-100 btn-sm">
                            Explore
                          </Button>
                        </Link>
                      </div>
                    </Card.Footer>
                  </Card>
                </Link>
              </div>
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4>No recorded courses found matching your criteria</h4>
            </div>
          )}
        </div>
      </div>

      {/* Demo Modal */}
      <Modal show={showModal} onHide={handleCloseDemo} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Free Demo: {selectedDemoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDemoUrl ? (
            <div className="ratio ratio-16x9">
              <iframe
                src={selectedDemoUrl}
                title="Demo Video"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className="text-center text-muted">No demo video available.</p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDemo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const CourseDetail = ({ label, value }) => (
  <div className="d-flex justify-content-between mb-2">
    <span className="fw-semibold">{label}</span>
    <span>{value || "N/A"}</span>
  </div>
);

export default TargetJudiciaryCourse;
