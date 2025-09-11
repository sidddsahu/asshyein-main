import React, { useState } from 'react';
import { Container, Row, Col, Tab, Nav, Card, Accordion, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const CoursesSummry = () => {
    const [activeTab, setActiveTab] = useState('courses');

    const  coursesData = [
        {
            id: 1,
            title: "Foundation Course",
            features: [
                "Live classes (10 subjects: Law, GK, English)",
                "Recordings, notes, study modules (hard copy)",
                "Prelims+Mains tests + evaluations"

            ],
            price: "₹75,000",
            duration: "18 Months",
            faculty: "Nitesh Sir, Anamika Mam",
            type: "Live Course"
        },
        {
            id: 2,
            title: "Foundation Advanced",
            features: [
                "Same as Foundation Course",
                "Extended duration"
            ],
            price: "₹75,000",
            duration: "36 Months",
            faculty: "Nitesh Sir, Anamika Mam",
            type: "Live Course"
        },
        {
            id: 3,
            title: "Target Judiciary",
            features: [
                "Recorded classes (10 subjects + GK/Hindi/English/Computer)",
                "Doubt discussion group"
            ],
            price: "₹25,000",
            duration: "13 Months",
            type: "Recorded Course"
        },
        {
            id: 4,
            title: "BNSS",
            features: [
                "Live BNSS classes + recordings",
                "Topic tests"
            ],
            price: "₹5,000",
            duration: "Till completion",
            type: "Live Course"
        },
        {
            id: 5,
            title: "MP Local Laws",
            features: [
                "Live classes (Land Revenue Code + Accommodation Control Act)",
                "Notes, tests, study modules"
            ],
            price: "₹7,999",
            duration: "1 Year",
            type: "Live Course"
        },
        {
            id: 6,
            title: "RJS Essay Writing",
            features: [
                "24 live classes + 70 essays",
                "Evaluations + mentorship"
            ],
            price: "₹8,000",
            duration: "6 Months",
            type: "Live Course"
        },
        {
            id: 7,
            title: "Translation Course",
            features: [
                "15+ classes (English ↔ Hindi)",
                "40+ practice sets"
            ],
            price: "₹5,000",
            duration: "6 Months",
            type: "Live Course"
        },
        {
            id: 8,
            title: "Judgement Writing",
            features: [
                "For state judiciary exams (MP, UP, Rajasthan, etc.)"
            ],
            price: "₹5,000",
            duration: "6 Months",
            type: "Live Course"
        },
        {
            id: 9,
            title: "Bharatiya Sakshya Adhiniyam (BSA)",
            features: [
                "Live classes + tests",
                "Recordings included"
            ],
            price: "₹5,000",
            duration: "6 Months",
            faculty: "Nitesh Sir",
            type: "Live Course"
        },
        {
            id: 10,
            title: "Essay & Precise Writing",
            features: [
                "13+ recorded classes",
                "30+ assignments + evaluation"
            ],
            price: "₹4,000",
            duration: "6 Months",
            type: "Recorded Course"
        }
    ];

    const testSeriesData = [
        {
            id: 1,
            title: "Prelims Test Series",
            type: "Mock",
            features: [
                "Number of questions – 100",
                "Maximum Marks - 100",
                "Time – 2.00 hours",
                "Full length Mock Test Series for Rajasthan Judiciary Examination",
                "All subject including general English and Hindi is covered",
                "Attempts: 02",
                "Answers with Explanation",
                "All India Ranking",
                "No negative Marking"
            ],
            price: "₹3,999",
            duration: "6 Months",
            status: "Published"
        },
        {
            id: 2,
            title: "Sectional Test Series",
            type: "Sectional",
            features: [
                "Number of questions – 100",
                "Maximum Marks - 100",
                "Time – 2.00 hours",
                "Full length Mock Test Series for Rajasthan Judiciary Examination",
                "All subject including general English and Hindi is covered",
                "Attempts: 02",
                "Answers with Explanation",
                "All India Ranking",
                "No negative Marking",
                "duration: Till Rajasthan Judiciary Prelims Examination"
            ],
            price: "₹2,999",
            duration: "6 Months",
            status: "Published"
        },
        {
            id: 3,
            title: "Rajasthan Judiciary Mock Test Series",
            type: "Mock",
            features: [
                "Number of questions – 100",
                "Maximum Marks - 100",
                "Time – 2.00 hours",
                "Full length Mock Test Series for Rajasthan Judiciary Examination",
                "All subject including general English and Hindi is covered",
                "Attempts: 02",
                "Answers with Explanation",
                "All India Ranking",
                "No negative Marking"
            ],
            price: "₹1,500",
            duration: "6 Months",
            status: "Published"
        },
        {
            id: 4,
            title: "Rajasthan Judiciary Sectional Test Series",
            type: "Sectional",
            features: [
                "Number of questions – 100",
                "Maximum Marks - 100",
                "Time – 2.00 hours",
                "Full length Mock Test Series for Rajasthan Judiciary Examination",
                "All subject including general English and Hindi is covered",
                "Attempts: 02",
                "Answers with Explanation",
                "All India Ranking",
                "No negative Marking",
                "duration: Till Rajasthan Judiciary Prelims Examination"
            ],
            price: "₹2,500",
            duration: "6 Months",
            status: "Published"
        },
        {
            id: 5,
            title: "Rajasthan APO Test Series",
            type: "Mock",
            features: [
                "Course Name - Rajasthan APO Prelims Mock Test Series",
                "Total Mock 12",
                "Attempts 02",
                "Answers With Explanation",
                "All India Ranking",
                "Mock based on the Pattern of Rajasthan APO Exam",
                "Till Prelims Exam"
            ],
            price: "₹1,500",
            duration: "6 Months",
            status: "Published"
        },
        {
            id: 6,
            title: "Rajasthan Judiciary Online Test Series",
            type: "Mock",
            features: [
                "Total number of Mocks : 10",
                "Based on the Pattern of Rajasthan Judiciary",
                "Answers with Explanation",
                "All India Ranking",
                "Double discussion group"
            ],
            price: "₹500",
            duration: "6 Months",
            status: "Published"
        }
    ];

    return (
        <Container className="my-5">
            {/* <h1 className="text-center mb-4">Our Programs</h1> */}

            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Row>
                    <Col md={12}>
                        <Nav  variant="pills"  className="flex mb-5 ">
                            <Nav.Item className=''>
                                <Nav.Link eventKey="courses">Courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="testSeries">Test Series</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col md={12}>
                        <Tab.Content>
                            {/* -----------------Courses---------------- */}
                            <Tab.Pane eventKey="courses">
                                           <div className="row">
                {coursesData.map((course) => (
                    <div className="col-md-6 mb-4" key={course.id}>
                        <div className="card h-100">
                            <div className="card-header bg-white d-flex justify-content-between align-items-center">
                                <h5 className="card-title mb-0">{course.title}</h5>
                                <span style={{color:" #C81A1E"}} className=" fw-bold">{course.price}</span>
                            </div>
                            <div className="card-body">
                                <h6>Features:</h6>
                                <ul className="mb-3">
                                    {course.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="card-text">
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Price:</span>
                                        <span>{course.price}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Duration:</span>
                                        <span>{course.duration}</span>
                                    </div>
                                    {/* <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Faculty:</span>
                                        <span>{course.facult0y || "Not specified"}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2 border-bottom">
                                        <span className="fw-bold">Course Type:</span>
                                        <span>{course.type}</span>
                                    </div>
                                    <div className="d-flex justify-content-between mb-2">
                                        <span className="fw-bold">Status:</span>
                                        <span className={`badge ${course.status === 'Published' ? 'bg-success' : 'bg-secondary'}`}>
                                            {course.status}
                                        </span>
                                    </div> */}
                                </div>
                            </div>
                            <div className="card-footer bg-white">
                                <Link
                                    to={`/courses/${course.id}`}
                                    className="btn  w-100"
                                    style={{background:" #C81A1E" , color:"white"}}
                                >
                                    View Details
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

                            </Tab.Pane>
                            {/* --------------------Test Series--------------- */}
                            <Tab.Pane eventKey="testSeries">
                                <h3 className="mb-4" >Test Series</h3>

                                <Tab.Container defaultActiveKey="mainTestSeries">
                                    <div>
                                        <Nav variant="tabs" className="mb-4">
                                            <Nav.Item>
                                                <Nav.Link eventKey="prelimsTestSeries">Test Series Prelims </Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="mainTestSeries">Test Series Main </Nav.Link>
                                            </Nav.Item>
                                        </Nav>

                                        <Tab.Content>

                                            {/* Prelims Test Series Tab */}
                                            <Tab.Pane eventKey="courses">
                                                <div className="row">
                                                    {coursesData.map((course) => (
                                                        <div className="col-md-6 mb-4" key={course.id}>
                                                            <div className="card h-100">
                                                                <div className="card-header bg-white d-flex justify-content-between align-items-center">
                                                                    <h5 className="card-title mb-0">{course.title}</h5>
                                                                    <span className="text-primary fw-bold">{course.price}</span>
                                                                </div>
                                                                <div className="card-body">
                                                                    <h6>Features:</h6>
                                                                    <ul className="mb-3">
                                                                        {course.features.map((feature, i) => (
                                                                            <li key={i}>{feature}</li>
                                                                        ))}
                                                                    </ul>

                                                                    <div className="card-text">
                                                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                                                            <span className="fw-bold">Price:</span>
                                                                            <span>{course.price}</span>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                                                            <span className="fw-bold">duration:</span>
                                                                            <span>{course.duration}</span>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                                                            <span className="fw-bold">Faculty:</span>
                                                                            <span>{course.faculty || "Not specified"}</span>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between mb-2 border-bottom">
                                                                            <span className="fw-bold">Course Type:</span>
                                                                            <span>{course.type}</span>
                                                                        </div>
                                                                        <div className="d-flex justify-content-between mb-2">
                                                                            <span className="fw-bold">Status:</span>
                                                                            <span className={`badge ${course.status === 'Published' ? 'bg-success' : 'bg-secondary'}`}>
                                                                                {course.status}
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="card-footer bg-white">
                                                                    <Link
                                                                        to={`/courses/${course.id}`}
                                                                        className="btn btn-primary w-100"
                                                                    >
                                                                        View Details
                                                                    </Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </Tab.Pane>

                                            {/* Main Test Series Tab */}
                                            <Tab.Pane eventKey="mainTestSeries">
                                                <Row>
                                                    {testSeriesData.map((test) => (
                                                        <Col md={6} key={test.id} className="mb-4">
                                                            <Card className="h-100">
                                                                <Card.Header className="bg-light">
                                                                    <div className="d-flex justify-content-between">
                                                                        <h5 className="mb-0">{test.title}</h5>
                                                                        <span className="badge bg-primary">{test.type}</span>
                                                                    </div>
                                                                </Card.Header>
                                                                <Card.Body>
                                                                    <ul className="mb-3">
                                                                        {test.features.map((feature, index) => (
                                                                            <li key={index}>{feature}</li>
                                                                        ))}
                                                                    </ul>
                                                                </Card.Body>
                                                                <Card.Footer className="bg-white">
                                                                    <div className="d-flex justify-content-between align-items-center">
                                                                        <div>
                                                                            <span className="fw-bold text-primary">{test.price}</span>
                                                                            <span className="text-muted ms-2">({test.duration})</span>
                                                                        </div>
                                                                        <span className={`badge ${test.status === 'Published' ? 'bg-success' : 'bg-secondary'}`}>
                                                                            {test.status}
                                                                        </span>
                                                                    </div>
                                                                </Card.Footer>
                                                            </Card>
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Tab.Pane>


                                        </Tab.Content>
                                    </div>
                                </Tab.Container>
                            </Tab.Pane>






                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
};

export default CoursesSummry;