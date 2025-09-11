import React, { useState } from "react";
import { Modal, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../../layouts/Layout";

const syllabusData = [
  { id: "58_previoussyllabus", name: "Himachal Pradesh Prelims Exam 2016" },
  { id: "57_previoussyllabus", name: "Himachal Pradesh Prelims Exam 2017" },
  { id: "56_previoussyllabus", name: "Himachal Pradesh Prelims Exam 2018" },
  { id: "55_previoussyllabus", name: "Himachal Pradesh Prelims Exam 2019" },
  { id: "54_previoussyllabus", name: "Himachal Pradesh Prelims Exam 2023" },
];

const HimanchalHaryana = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const handleDownloadClick = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  return (
     <Layout header={9} footer={1}>
    <section id="margin-top" className="ptb ptb-xs-60">
      <div id="margin-top" className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="cart_wrpaer">
              <h3  className="main-heading mt-5">
                Download the Syllabus for Himachal, Haryana Prelims
              </h3>
              <div className="table_scroll table-responsive previous-year-section text-center">
                <Table striped className="table table-striped">
                  <thead className="dark-bg">
                    <tr>
                      <th className="text-center">Name</th>
                      <th className="text-center">Download PDF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {syllabusData.map((item) => (
                      <tr key={item.id}>
                        <td className="padding_all">
                          <p>{item.name}</p>
                        </td>
                        <td>
                          <button
                            className="btn btn-link"
                            onClick={() => handleDownloadClick(item.id)}
                            title="Download PDF"
                          >
                            <img
                              src="https://www.alec.co.in/assets/images/acrobatpdf.jpg"
                              width="50"
                              height="70"
                              alt="Download PDF"
                            />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          backdrop="static"
          keyboard={true}
          size="lg"
        >
          <Modal.Body>
            <div id="fillstudentinfo">
              <h5>Fill in your details to download the PDF</h5>
              <p>Selected Syllabus ID: {selectedId}</p>
              <button
                className="btn btn-primary"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </section>
    </Layout>
  );
};

export default HimanchalHaryana;
