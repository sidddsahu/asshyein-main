import React, { useState } from "react";
import { Nav, Offcanvas, Button } from "react-bootstrap";

const SidebarContent = ({ activeTab, setActiveTab, closeSidebar }) => {
  const handleLinkClick = (tab) => {
    setActiveTab(tab);
    if (closeSidebar) closeSidebar(); // Auto-close mobile
  };

  return (
    <div className="p-3">
      <h5 className="fw-bold mb-3 border-bottom pb-2">Courses</h5>
      <Nav className="flex-column gap-2 mb-4">
        <Nav.Link
          onClick={() => handleLinkClick("foundation")}
          className={`fw-medium ${activeTab === "foundation" ? "text-primary fw-bold" : ""}`}
        >
          Live Courses
        </Nav.Link>
        <Nav.Link
          onClick={() => handleLinkClick("Recorded")}
          className={`fw-medium ${activeTab === "Recorded" ? "text-danger fw-bold" : ""}`}
        >
          Recorded Courses
        </Nav.Link>
      </Nav>

      <h5 className="fw-bold mb-3 border-bottom pb-2">Test Series</h5>
      <Nav className="flex-column gap-2">
        <Nav.Link
          onClick={() => handleLinkClick("prelims")}
          className={`fw-medium ${activeTab === "prelims" ? "text-danger fw-bold" : ""}`}
        >
          Prelims Test Series
        </Nav.Link>
        <Nav.Link
          onClick={() => handleLinkClick("mains")}
          className={`fw-medium ${activeTab === "mains" ? "text-danger fw-bold" : ""}`}
        >
          Mains Test Series
        </Nav.Link>
      </Nav>
    </div>
  );
};

const MpSidebar = ({ activeTab, setActiveTab }) => {
  const [show, setShow] = useState(false);
  const toggleSidebar = () => setShow((prev) => !prev);

  return (
    <>
      {/* Mobile Filter Toggle */}
      <div className="d-md-none text-end p-2">
        <Button
          className="td_btn_in td_white_color td_accent_bg border-0 mb-0 py-2 fw-semibold"
          onClick={toggleSidebar}
        >
          ☰ Filter
        </Button>
      </div>

      {/* Offcanvas (Mobile Sidebar) */}
      <Offcanvas show={show} onHide={toggleSidebar} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Courses & Test Series</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <SidebarContent
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            closeSidebar={toggleSidebar}
          />
        </Offcanvas.Body>
      </Offcanvas>

      {/* Desktop Sidebar */}
      <div className="d-none d-md-block bg-light sidebar-desktop">
        <SidebarContent activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </>
  );
};

export default MpSidebar;
