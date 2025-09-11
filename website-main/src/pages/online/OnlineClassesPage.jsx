import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Layout } from "../../layouts/Layout";

const onlineClasses = [
  {
    id: 1,
    title: "Uttar Pradesh Judicial Services Examination",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7btNlVcGDj9WW9jxsH8cdOW&si=vSalaZzMSkJGqe5w",
  },
  {
    id: 2,
    title: "Bihar Judicial Services Exam Complete Course by Nitesh Sir | ALEC Judiciary",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7aMN8Wo7hW9R1oLC0OCEYvQ&si=YhJyXYlhwSvGlvgy",
  },
  {
    id: 3,
    title: "MPCJ 2023 by Nitesh Sir ALEC for Judiciary",
    link: "https://youtu.be/mVAFWOSD3mk?si=qqbkrnRC6PoGnbKA",
  },
  {
    id: 4,
    title: "State Specific Course for Chhattisgarh Civil Judge | CG Rent Control Act",
    link: "https://www.youtube.com/live/klGfF_XMNhI?si=X_LOTZwAgheQ_pwJ",
  },
  {
    id: 5,
    title: "Rajasthan Judiciary Services complete course by Nitesh Sir",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7Zmd7AwnaIZ67IlI9tEqFFA&si=03SNz0UUWmlw3GXt",
  },
  {
    id: 6,
    title: "Uttar Pradesh Judicial Services Examination (UPPCS-J) Complete Course",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7btNlVcGDj9WW9jxsH8cdOW&si=I3rzUeFLvTjwIlju",
  },
  {
    id: 7,
    title: "Jharkhand Judicial Services Crash Course by ALEC for Judiciary",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7bSWePttwksNnrrrKJ8kH0S&si=H7j0zqVIaNzF7zXE",
  },
  {
    id: 8,
    title: "Haryana Judiciary Services (HJS) Crash Course | Alec for judiciary",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7amlmNTmaG1du3jnxPEzNEt&si=K5ipPhUEzh2nu5fQ",
  },
  {
    id: 9,
    title: "Delhi Judicial Service (DJS) Exam Complete Course by Nitesh Sir",
    link: "https://youtube.com/playlist?list=PLa1H6vWJbT7b4TBWsQMDj0A-JsD1z5Qw_&si=gVax-Lh64n4b4aA-",
  },
  {
    id: 10,
    title: "Himachal Pradesh Judiciary Syllabus Vacancy 2024 | By Pooja Ma'am",
    link: "https://youtu.be/h6ArLmeHgw8?si=XPJEXwJI5tkg0eXT",
  },
];

const OnlineClassesPage = () => {
  return (
     <Layout header={9} footer={1}>
    <Container id="margin-top" className="">
      <h2 className="text-center mb-4 fw-bold text-primary mt-5">Online Judiciary Classes</h2>
      <p className="text-center text-muted fs-5">
        Looking to ace your judiciary exams? Check out our <strong>Free YouTube videos</strong>.
        We've put together valuable content to help you prepare effectively. Click the links below to start learning!
      </p>
      <Row className="justify-content-center">
        {onlineClasses.map((course) => (
          <Col md={6} lg={4} key={course.id} className="mb-4">
            <Card className="shadow-lg border-0 rounded-4 overflow-hidden h-100">
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-primary fw-semibold fs-5">{course.title}</Card.Title>
                <Button
                  variant="outline-primary"
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 fw-semibold"
                >
                  Watch Now
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </Layout>
  );
};

export default OnlineClassesPage;
