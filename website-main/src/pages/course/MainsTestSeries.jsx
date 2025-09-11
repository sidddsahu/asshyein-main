// import React, { useState, useEffect } from "react";
// import { Card, Carousel } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import DOMPurify from "dompurify";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "react-toastify/dist/ReactToastify.css";

// const PrelimsTestSeries = ({ selectedCategoryId }) => {
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const { category, subcategory, subsubcategory } = useParams();

//   // ✅ Static Dummy Data
//   const dummyCourses = [
//     {
//       _id: "1",
//       testmodule: "Prelims Test Series ",
//       category: "Test Series",
//       subcategory: "Prelims Test series",
//       subsubCategory: {
//         name: "Mp Judiciary",
//         subCategory: "Mp Judiciary",
//       },
//       Price: "499",
//       Durations: "1 Month",
//       LastDate: "2025-08-10",
//       images: [
//         "https://via.placeholder.com/600x300?text=Prelims+Test+1",
//         "https://via.placeholder.com/600x300?text=Slide+2",
//       ],
//     },
//     {
//       _id: "2",
//       testmodule: "Main Test Series B",
//       category: "Test Series",
//       subcategory: "Main test series",
//       subsubCategory: {
//         name: "Mp judiciary",
//         subCategory: "",
//       },
//       Price: "299",
//       Durations: "15 Days",
//       LastDate: "2025-09-01",
//       images: [],
//     },

//   ];

//   useEffect(() => {
//     filterCourses();
//   }, [category, subcategory, subsubcategory, selectedCategoryId]);

//   const filterCourses = () => {
//     let filtered = [...dummyCourses];

//     if (category) {
//       filtered = filtered.filter(
//         (course) =>
//           course.category?.toLowerCase() === category.toLowerCase()
//       );
//     }

//     if (subcategory) {
//       filtered = filtered.filter(
//         (course) =>
//           course.subcategory?.toLowerCase() === subcategory.toLowerCase()
//       );
//     }

//     if (
//       selectedCategoryId &&
//       typeof selectedCategoryId.name === "string" &&
//       selectedCategoryId.name.trim() !== ""
//     ) {
//       filtered = filtered.filter(
//         (course) =>
//           course.subsubCategory?.name?.toLowerCase() ===
//           selectedCategoryId.name.toLowerCase()
//       );
//     }

//     setFilteredCourses(filtered);
//   };

//   const sanitizeHtml = (html) => {
//     return DOMPurify.sanitize(html);
//   };

//   return (
//     <div className="container my-5">
//       <div className="row">
//         {filteredCourses.length > 0 ? (
//           filteredCourses.map((test) => (
//             <div className="col-md-6 mb-4" key={test._id}>
//               <Link to={`/testseries/${test._id}`} className="btn w-100 mb-2">
//                 <Card className="h-100 shadow-sm">
//                   {/* Image Carousel */}
//                   {test.images && test.images.length > 0 ? (
//                     <Carousel
//                       indicators={test.images.length > 1}
//                       controls={test.images.length > 1}
//                     >
//                       {test.images.map((image, index) => (
//                         <Carousel.Item key={index}>
//                           <img
//                             src={image}
//                             alt={`Slide ${index + 1}`}
//                             className="d-block w-100"
//                             style={{ height: "100%", objectFit: "cover" }}
//                           />
//                         </Carousel.Item>
//                       ))}
//                     </Carousel>
//                   ) : (
//                     <div
//                       className="bg-secondary d-flex justify-content-center align-items-center"
//                       style={{ height: "200px" }}
//                     >
//                       <span className="text-white">No Image Available</span>
//                     </div>
//                   )}

//                   <Card.Header className="bg-white d-flex justify-content-center align-items-center">
//                     <Card.Title className="mb-0 fs-5 fw-bold">
//                       {test.testmodule}
//                     </Card.Title>
//                   </Card.Header>

//                   <Card.Body>
//                     <div className="card-text">
//                       <DetailRow label="Judicary:" value={test.subsubCategory.name} />
//                       <DetailRow label="Course:" value={test.subsubCategory.subCategory} />
//                       <DetailRow label="Price:" value={`₹${test.Price}`} />
//                       <DetailRow label="Duration:" value={test.Durations} />
//                       {test.LastDate && (
//                         <DetailRow
//                           label="Last Date:"
//                           value={new Date(test.LastDate).toLocaleDateString()}
//                         />
//                       )}
//                     </div>
//                   </Card.Body>

//                   <Card.Footer className="bg-white d-flex gap-2">
//                     <Link
//                       to={`/testseries/${test._id}`}
//                       className="btn w-100 mb-2"
//                       style={{ background: "#C81A1E", color: "white" }}
//                     >
//                       View Details
//                     </Link>
//                   </Card.Footer>
//                 </Card>
//               </Link>
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-center">
//             <h4>No test series found for this category</h4>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// const DetailRow = ({ label, value }) => (
//   <div className="d-flex justify-content-between mb-2 border-bottom">
//     <span className="fw-bold">{label}</span>
//     <span>{value || "N/A"}</span>
//   </div>
// );

// export default PrelimsTestSeries;


import React, { useState, useEffect } from "react";
import { Card, Carousel } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import "bootstrap/dist/css/bootstrap.min.css";

const MainsTestSeries = ({ selectedCategoryId }) => {
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category, subcategory, subsubcategory } = useParams();

  const dummyCourses = [
    {
      _id: "test1",
      testmodule: "Mains Test Series 2025 - Paper 1",
      category: "cat1",
      subcategory: "subcat1",
      subsubCategory: { name: "Judiciary Civil" },
      Price: 1999,
      Durations: "6 Weeks",
      images: [
        "https://via.placeholder.com/600x300?text=Test+Series+1",
        "https://via.placeholder.com/600x300?text=Test+Series+2",
      ],
    },
    {
      _id: "test2",
      testmodule: "Crash Course Mains Tests",
      category: "cat2",
      subcategory: "subcat2",
      subsubCategory: { name: "Judiciary Criminal" },
      Price: 1499,
      Durations: "4 Weeks",
      images: ["https://via.placeholder.com/600x300?text=Crash+Test+Series"],
    },
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setCourses(dummyCourses);
      filterCourses(dummyCourses);
      setLoading(false);
    }, 500);
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
                    to={`/mainseries/${test._id}`}
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

export default MainsTestSeries;

