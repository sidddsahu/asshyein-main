import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const PrelimsTestSeries = ({ selectedCategoryId }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, subcategory, subsubcategory } = useParams();

  const dummyCourses = [
    {
      _id: "pre1",
      testmodule: "Prelims Test Series 2025 - Paper 1",
      category: "cat1",
      subcategory: "subcat1",
      subsubCategory: { name: "Mp Judiciary " },
      Price: 999,
      Durations: "2 Weeks",
      images: [
        "https://via.placeholder.com/600x300?text=Prelims+1",
        "https://via.placeholder.com/600x300?text=Prelims+2",
      ],
    },
    {
      _id: "pre2",
      testmodule: "Rapid Revision Test Series",
      category: "cat2",
      subcategory: "subcat2",
      subsubCategory: { name: "Mp Judiciary" },
      Price: 799,
      Durations: "10 Days",
      images: ["https://via.placeholder.com/600x300?text=Prelims+Test+2"],
    },
  ];

  useEffect(() => {
    // Simulate loading and set dummy data
    setLoading(true);
    setTimeout(() => {
      setCourses(dummyCourses);
      filterCourses(dummyCourses);
      setLoading(false);
    }, 400);
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      filterCourses(courses);
    }
  }, [category, subcategory, subsubcategory, selectedCategoryId]);

  const filterCourses = (list) => {
    let filtered = [...list];

    if (category) {
      filtered = filtered.filter((course) => course.category === category);
    }

    if (subcategory) {
      filtered = filtered.filter((course) => course.subcategory === subcategory);
    }

    if (
      selectedCategoryId &&
      typeof selectedCategoryId.name === "string" &&
      selectedCategoryId.name.trim() !== ""
    ) {
      filtered = filtered.filter(
        (course) =>
          course.subsubCategory &&
          course.subsubCategory.name &&
          course.subsubCategory.name.toLowerCase() ===
            selectedCategoryId.name.toLowerCase()
      );
    }

    setFilteredCourses(filtered);
  };

  const sanitizeHtml = (html) => DOMPurify.sanitize(html);

  if (loading) {
    return <div className="container my-5 text-center">Loading courses...</div>;
  }

  return (
    <div className="container my-5">
      <div className="row">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((test) => (
            <div className="col-lg-4 col-md-6 mb-4" key={test._id}>
              <Card className="h-100 shadow rounded-4 border-0 overflow-hidden hover-card transition-all">
                {test.images && test.images.length > 0 ? (
                  <Carousel
                    indicators={test.images.length > 1}
                    controls={test.images.length > 1}
                    interval={2500}
                  >
                    {test.images.map((image, index) => (
                      <Carousel.Item key={index}>
                        <img
                          src={image}
                          alt={`Slide ${index + 1}`}
                          className="d-block w-100"
                          style={{
                            borderTopLeftRadius: "0.75rem",
                            borderTopRightRadius: "0.75rem",
                          }}
                        />
                      </Carousel.Item>
                    ))}
                  </Carousel>
                ) : (
                  <div
                    className="bg-secondary text-white d-flex justify-content-center align-items-center"
                    style={{
                      height: "180px",
                      borderTopLeftRadius: "0.75rem",
                      borderTopRightRadius: "0.75rem",
                    }}
                  >
                    No Image Available
                  </div>
                )}

                <Card.Body className="p-3">
                  <h5 className="text-center fw-bold mb-3">{test.testmodule}</h5>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Judiciary:</span>
                    <span>{test?.subsubCategory?.name || "N/A"}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Price:</span>
                    <span>₹{test.Price}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <span className="fw-semibold">Duration:</span>
                    <span>{test.Durations}</span>
                  </div>
                </Card.Body>

                <Card.Footer className="bg-white border-0 px-3 pb-3">
                  <Link
                    to={`/testseries/${test._id}`}
                    className="btn btn-sm w-100 fw-semibold"
                    style={{ backgroundColor: "#C81A1E", color: "white" }}
                  >
                    View Details
                  </Link>
                </Card.Footer>
              </Card>
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h4>No test series found for this category</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default PrelimsTestSeries;
