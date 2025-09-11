// import React, { useState, useEffect } from "react";
// import { Card, Button, Modal } from "react-bootstrap";
// import { Link, useParams } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

// // ✅ Dummy Static Course Data

// const FoundationCourses = ({
//   selectedCategoryId,
//   selectedSubCategoryId,
//   useNewFilter = false,
//   dummyCourses
// }) => {
//   const [filteredCourses, setFilteredCourses] = useState([]);
//   const [showModal, setShowModal] = useState(false);
//   const [selectedDemoUrl, setSelectedDemoUrl] = useState(null);
//   const [selectedDemoTitle, setSelectedDemoTitle] = useState(null);
//   const { id: courseId } = useParams();

//   const filterCourses = () => {
//     let filtered = [...dummyCourses];

//     if (useNewFilter) {
//       if (selectedCategoryId) {
//         filtered = filtered.filter(
//           (course) =>
//             course.category?._id === selectedCategoryId?.toString()
//         );
//       }

//       if (selectedSubCategoryId) {
//         filtered = filtered.filter(
//           (course) =>
//             course.subCategory?._id === selectedSubCategoryId?.toString()
//         );
//       }

//       if (courseId) {
//         filtered = filtered.filter(
//           (course) =>
//             course._id === courseId?.toString() ||
//             course.subsubCategory?._id === courseId?.toString()
//         );
//       }
//     } else {
//       if (courseId) {
//         filtered = filtered.filter(
//           (course) => course.subsubCategory?._id === courseId?.toString()
//         );
//       } else if (selectedCategoryId) {
//         filtered = filtered.filter(
//           (course) =>
//             course.category?._id === selectedCategoryId?.toString()
//         );
//       }
//     }

//     setFilteredCourses(filtered);
//   };

//   useEffect(() => {
//     filterCourses();
//   }, [selectedCategoryId, selectedSubCategoryId, courseId]);

//   const handleOpenDemo = (url, title) => {
//     setSelectedDemoUrl(url);
//     setSelectedDemoTitle(title);
//     setShowModal(true);
//   };

//   const handleCloseDemo = () => {
//     setSelectedDemoUrl(null);
//     setSelectedDemoTitle(null);
//     setShowModal(false);
//   };

//   const showAllCoursesHeader =
//     !courseId && !selectedCategoryId && !selectedSubCategoryId;

//   return (
//     <div className="py-4" style={{ backgroundColor: "#f5f7fa" }}>
//       <div className="container">
//         {showAllCoursesHeader && (
//           <h3 className="text-center mb-4 fw-bold text-dark">
//             All Foundation Courses
//           </h3>
//         )}

//         <div className="row g-4">
//           {filteredCourses.length > 0 ? (
//             filteredCourses.map((course) => {
//               const imageSrc = Array.isArray(course.images)
//                 ? course.images[0]
//                 : course.images;

//               return (
//                 <div className="col-md-6" key={course._id}>
//                   <Link to={`/courses/${course._id}`} className="btn w-100 mb-2">
//                     <Card className="h-100 shadow-sm border-0">
//                       <Card.Img
//                         variant="top"
//                         src={imageSrc}
//                         alt="Course"
//                       />
//                       <Card.Body className="p-3">
//                         <div className="d-flex align-items-center justify-content-center">
//                           <span className="text-center fw-bold fs-5">
//                             {course.subCategory?.name || "N/A"}
//                           </span>
//                         </div>
//                         <div className="small">
//                           <CourseDetail
//                             label="Judiciary:"
//                             value={course.subsubCategory?.name}
//                           />
//                           <CourseDetail label="Price:" value={`₹ ${course.Price}`} />
//                           <CourseDetail label="Duration:" value={course.Durations} />
//                           <CourseDetail label="Faculty:" value={course.TrainerName} />
//                           <CourseDetail label="Type:" value={course.category?.name} />
//                         </div>
//                       </Card.Body>
//                       <Card.Footer className="bg-white border-0 p-3 pt-0">
//                         <Link
//                           to={`/courses/${course._id}`}
//                           className="btn w-100 mb-2"
//                           style={{ backgroundColor: "#C81A1E", color: "white" }}
//                         >
//                           View Details
//                         </Link>
//                         <div className="d-flex gap-2">
//                           {course.URL && (
//                             <Button
//                               variant="outline-danger"
//                               className="w-50 btn-sm"
//                               onClick={() =>
//                                 handleOpenDemo(course.URL, course.Coursename)
//                               }
//                             >
//                               Free Demo
//                             </Button>
//                           )}
//                           <Link className="w-50" to={`/courses/${course._id}`}>
//                             <Button variant="outline-dark" className="w-100 btn-sm">
//                               Explore
//                             </Button>
//                           </Link>
//                         </div>
//                       </Card.Footer>
//                     </Card>
//                   </Link>
//                 </div>
//               );
//             })
//           ) : (
//             <NoCoursesFound
//               hasSelection={
//                 !!(courseId || selectedCategoryId || selectedSubCategoryId)
//               }
//               onRetry={filterCourses}
//             />
//           )}
//         </div>
//       </div>

//       {/* Modal for Free Demo */}
//       <Modal show={showModal} onHide={handleCloseDemo} size="lg" centered>
//         <Modal.Header closeButton>
//           <Modal.Title>Free Demo: {selectedDemoTitle}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedDemoUrl ? (
//             <div className="ratio ratio-16x9">
//               <iframe
//                 src={selectedDemoUrl}
//                 title="Demo Video"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           ) : (
//             <p className="text-center text-muted">
//               No demo video available for this course.
//             </p>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseDemo}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// const CourseDetail = ({ label, value }) => (
//   <div className="d-flex justify-content-between">
//     <span className="fw-semibold">{label}</span>
//     <span>{value || "N/A"}</span>
//   </div>
// );

// const NoCoursesFound = ({ hasSelection, onRetry }) => (
//   <div className="col-12 text-center py-5">
//     <h5>No courses found {hasSelection ? "for this selection" : ""}</h5>
//     {!hasSelection && (
//       <Button variant="primary" onClick={onRetry} className="mt-3">
//         Retry Loading Courses
//       </Button>
//     )}
//   </div>
// );

// export default FoundationCourses;

import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Badge } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const FoundationCourses = ({
  state,
  selectedCategoryId,
  selectedSubCategoryId,
  useNewFilter = false,
}) => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedDemoUrl, setSelectedDemoUrl] = useState(null);
  const [selectedDemoTitle, setSelectedDemoTitle] = useState(null);
  const { id: courseId } = useParams();

  const dummyData = [
    {
      _id: "course1",
      Coursename: "Foundation Judiciary 2025",
      category: { _id: "cat1", name: "Live Course" },
      subCategory: { _id: "subcat1", name: "Foundation Advance course" },
      subsubCategory: { _id: "subsub1", name: "Mp Jucdiciary" },
      Price: "10999",
      Durations: "8 Months",
      TrainerName: "Dr. Sameer",
      images: ["https://via.placeholder.com/300x200"],
      URL: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      _id: "course2",
      Coursename: "Foundation Crash Course",
      category: { _id: "cat1", name: "Live Course" },
      subCategory: { _id: "subcat2", name: "Foundation Course" },
      subsubCategory: { _id: "subsub2", name: "Mp Judiciary" },
      Price: "8999",
      Durations: "4 Months",
      TrainerName: "Ms. Neha Gupta",
      images: ["https://via.placeholder.com/300x200"],
      URL: "https://www.youtube.com/embed/tgbNymZ7vqY",
    },
  ];

  const fetchCourses = () => {
    setLoading(true);
    setTimeout(() => {
      setCourses(dummyData);
      filterCourses(dummyData);
      setLoading(false);
    }, 500); // Simulate loading
  };

  const filterCourses = (coursesList) => {
    let filtered = [...coursesList];

    if (useNewFilter) {
      if (selectedCategoryId) {
        filtered = filtered.filter(
          (course) =>
            course.category &&
            course.category._id?.toString() === selectedCategoryId?.toString()
        );
      }

      if (selectedSubCategoryId) {
        filtered = filtered.filter(
          (course) =>
            course.subCategory &&
            course.subCategory._id?.toString() ===
              selectedSubCategoryId?.toString()
        );
      }

      if (courseId) {
        filtered = filtered.filter(
          (course) =>
            course._id?.toString() === courseId?.toString() ||
            course.subsubCategory?._id?.toString() === courseId?.toString()
        );
      }
    } else {
      if (courseId) {
        filtered = filtered.filter(
          (course) =>
            course.subsubCategory?._id?.toString() === courseId?.toString()
        );
      } else if (selectedCategoryId) {
        filtered = filtered.filter(
          (course) =>
            course.category &&
            course.category._id?.toString() === selectedCategoryId?.toString()
        );
      }
    }

    setFilteredCourses(filtered);
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  useEffect(() => {
    if (courses.length > 0) {
      filterCourses(courses);
    }
  }, [selectedCategoryId, selectedSubCategoryId, courseId]);

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

  const showAllCoursesHeader =
    !courseId && !selectedCategoryId && !selectedSubCategoryId;

  if (loading) {
    return (
      <div className='py-5 text-center'>
        <div className='spinner-border text-danger' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className='py-5' style={{ backgroundColor: "#f5f7fa" }}>
      <div className='container'>
        {showAllCoursesHeader && (
          <h3 className='text-center mb-4 fw-bold text-dark'>
            All Foundation Courses
          </h3>
        )}
        <div className='row g-4'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => {
              const courseId = course._id || course.id;
              const imageSrc = Array.isArray(course.images)
                ? course.images[0]
                : course.images;

              return (
                <div className='col-lg-4 col-md-6' key={courseId}>
                  <Card className='h-100 border-0 shadow-sm rounded-4 overflow-hidden hover-effect'>
                    <div className='position-relative'>
                      <Card.Img variant='top' src={imageSrc} />
                      <Badge
                        bg='danger'
                        className='position-absolute top-0 end-0 m-2 text-uppercase'
                      >
                        {course.category?.name || "N/A"}
                      </Badge>
                    </div>
                    <Card.Body className='p-3'>
                      <h5 className='text-center fw-bold mb-3'>
                        {course.subCategory?.name || "Course Title"}
                      </h5>
                      <div className='small'>
                        <CourseDetail
                          label='Judiciary:'
                          value={course?.subsubCategory?.name}
                        />
                        <CourseDetail
                          label='Price:'
                          value={`₹ ${course.Price}`}
                        />
                        <CourseDetail
                          label='Duration:'
                          value={course.Durations}
                        />
                        <CourseDetail
                          label='Faculty:'
                          value={course.TrainerName}
                        />
                      </div>
                    </Card.Body>
                    <Card.Footer className='bg-white border-0 p-3 pt-0'>
                      <Link
                        to={`/courses/${courseId}`}
                        className='btn btn-sm w-100 fw-semibold'
                        style={{ backgroundColor: "#C81A1E", color: "white" }}
                      >
                        View Details
                      </Link>
                      <div className='d-flex gap-2 mt-2'>
                        {course.URL && (
                          <Button
                            variant='outline-danger'
                            className='w-50 btn-sm'
                            onClick={() =>
                              handleOpenDemo(course.URL, course.Coursename)
                            }
                          >
                            Free Demo
                          </Button>
                        )}
                        <Link to={`/courses/${courseId}`} className='w-50'>
                          <Button
                            variant='outline-dark'
                            className='w-100 btn-sm'
                          >
                            Explore
                          </Button>
                        </Link>
                      </div>
                    </Card.Footer>
                  </Card>
                </div>
              );
            })
          ) : (
            <NoCoursesFound
              hasSelection={
                !!(courseId || selectedCategoryId || selectedSubCategoryId)
              }
              onRetry={fetchCourses}
            />
          )}
        </div>
      </div>

      {/* Demo Video Modal */}
      <Modal show={showModal} onHide={handleCloseDemo} size='lg' centered>
        <Modal.Header closeButton>
          <Modal.Title>Free Demo: {selectedDemoTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedDemoUrl ? (
            <div className='ratio ratio-16x9'>
              <iframe
                src={selectedDemoUrl}
                title='Demo Video'
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <p className='text-center text-muted'>
              No demo video available for this course.
            </p>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleCloseDemo}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const CourseDetail = ({ label, value }) => (
  <div className='d-flex justify-content-between py-1 border-bottom'>
    <span className='fw-semibold'>{label}</span>
    <span>{value || "N/A"}</span>
  </div>
);

const NoCoursesFound = ({ hasSelection, onRetry }) => (
  <div className='col-12 text-center py-5'>
    <h5>No courses found {hasSelection ? "for this selection" : ""}</h5>
    {!hasSelection && (
      <Button variant='primary' onClick={onRetry} className='mt-3'>
        Retry Loading Courses
      </Button>
    )}
  </div>
);

export default FoundationCourses;
