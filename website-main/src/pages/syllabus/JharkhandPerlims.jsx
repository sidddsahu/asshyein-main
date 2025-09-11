import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Layout } from "../../layouts/Layout";

const JharkhandPrelims = () => {
  const [selectedSyllabus, setSelectedSyllabus] = useState(null);

  // Jharkhand Prelims Syllabus Data
  const syllabusData = [
    { id: 52, name: "Jharkhand Prelims Papers 2024" },
    { id: 53, name: "Jharkhand Prelims Papers 2023" },
    { id: 54, name: "Jharkhand Prelims Papers 2022" },
  ];

  // Handle Download Click
  const handleDownloadClick = (syllabusId) => {
    setSelectedSyllabus(syllabusId);
  };

  return (
      <Layout header={9} footer={1}>
    <section id="margin-top" className="ptb ptb-xs-60">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <div className="cart_wrpaer">
              <h3 className="main-heading text-center mt-5">
                Download the Syllabus for Jharkhand Prelims
              </h3>
              <div className="table_scroll table-responsive previous-year-section text-center">
                <table className="table table-striped">
                  <thead className="dark-bg">
                    <tr>
                      <th style={{ textAlign: "center" }}>Name</th>
                      <th style={{ textAlign: "center" }}>Download PDF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {syllabusData.map((syllabus) => (
                      <tr key={syllabus.id}>
                        <td className="padding_all">
                          <p>{syllabus.name}</p>
                        </td>
                        <td>
                          <button
                            className="btn"
                            data-bs-toggle="modal"
                            data-bs-target="#takestudentinfo"
                            onClick={() => handleDownloadClick(syllabus.id)}
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
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        <div
          className="modal fade"
          id="takestudentinfo"
          tabIndex="-1"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
          data-bs-backdrop="static"
          data-bs-keyboard="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Download Syllabus</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <p>
                  You are about to download{" "}
                  {syllabusData.find((s) => s.id === selectedSyllabus)?.name}.
                </p>
                <a
                  href={`https://www.example.com/syllabus/${selectedSyllabus}.pdf`}
                  className="btn btn-primary"
                  download
                >
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  );
};

export default JharkhandPrelims;
