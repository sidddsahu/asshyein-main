import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Table } from "react-bootstrap";
import { Layout } from "../../layouts/Layout";

export const judicialData = [
  { id: 64, name: "Assam Prelims Paper 2017" },
  { id: 63, name: "Chhattisgarh Prelims Paper 2023" },
  { id: 62, name: "Chhattisgarh Prelims Paper 2019" },
  { id: 61, name: "Chhattisgarh Prelims Paper 2017" },
  { id: 60, name: "Chhattisgarh Prelims Paper 2016" },
  { id: 59, name: "Chhattisgarh Prelims Paper 2014" },
];

export const JudicialServices = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedPaper, setSelectedPaper] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    city: "",
  });

  const handleShowModal = (paper) => {
    setSelectedPaper(paper);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setFormData({ name: "", email: "", mobile: "", city: "" });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Data:", formData);
    alert(`Download link for ${selectedPaper.name} will be sent to ${formData.email}`);
    handleCloseModal();
  };

  return (
    <Layout header={9} footer={1}>
      <section id="margin-top" className="ptb ptb-xs-60 py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart_wrapper">
                <h3 className="main-heading">Download the Syllabus for Judicial Services</h3>
                <div className="table-responsive text-center">
                  <Table striped bordered>
                    <thead className="bg-dark text-white">
                      <tr>
                        <th style={{ textAlign: "center" }}>Name</th>
                        <th style={{ textAlign: "center" }}>Download PDF</th>
                      </tr>
                    </thead>
                    <tbody>
                      {judicialData.map((item) => (
                        <tr key={item.id}>
                          <td>{item.name}</td>
                          <td>
                            <Button variant="primary" onClick={() => handleShowModal(item)}>
                              <img
                                src="https://www.alec.co.in/assets/images/acrobatpdf.jpg"
                                width="50"
                                height="70"
                                alt="Download PDF"
                              />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </div>
            </div>
          </div>

          {/* Modal for user details */}
          <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={true}>
            <Modal.Header closeButton>
              <Modal.Title>Enter the following information</Modal.Title>
            </Modal.Header>
            <Form onSubmit={handleSubmit}>
              <Modal.Body>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="text"
                    name="mobile"
                    placeholder="Enter your mobile number"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter your city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
                <Button variant="danger" onClick={handleCloseModal}>
                  Close
                </Button>
              </Modal.Footer>
            </Form>
          </Modal>
        </div>
      </section>
    </Layout>
  );
};

export default JudicialServices;
