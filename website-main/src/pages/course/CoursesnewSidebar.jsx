// import React, { useState } from "react";
// import { Nav } from "react-bootstrap";

// export const SidebarContent = ({ activeTab, setActiveTab }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => setIsOpen(!isOpen);

//   // Close only on mobile
//   const handleNavClick = (tabKey) => {
//     setActiveTab(tabKey);
//     if (window.innerWidth < 768) {
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className='mb-3'>
//       {/* Toggle Button - Visible on Mobile */}
//       <div className='d-block d-md-none text-end mb-2'>
//         <button
//           className='btn btn-outline-primary btn-sm'
//           onClick={toggleSidebar}
//         >
//           {isOpen ? "Close Filters" : "Show Filters"}
//         </button>
//       </div>

//       {/* Sidebar Content */}
//       <div
//         className={`p-3 bg-light border rounded ${
//           isOpen ? "d-block" : "d-none"
//         } d-md-block`}
//       >
//         <h5 className='fw-bold mb-3 border-bottom pb-2'>Filters</h5>

//         <h5 className='fw-bold mb-3 border-bottom pb-2'>Courses</h5>
//         <Nav className='flex-column gap-2'>
//           <Nav.Link
//             onClick={() => handleNavClick("foundation")}
//             className={`fw-medium ${
//               activeTab === "foundation" ? "text-primary fw-bold" : ""
//             }`}
//           >
//             Live Courses
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => handleNavClick("target")}
//             className={`fw-medium ${
//               activeTab === "target" ? "text-primary fw-bold" : ""
//             }`}
//           >
//             Recorded Courses
//           </Nav.Link>
//           <Nav.Link
//             onClick={() => handleNavClick("prelims")}
//             className={`fw-medium ${
//               activeTab === "prelims" ? "text-primary fw-bold" : ""
//             }`}
//           >
//             Test Series
//           </Nav.Link>
//         </Nav>

//         <div className=''>
//           <label className='form-label text-black mt-4 fw-semibold'>
//             Course Type
//           </label>

//           <div className='form-check'>
//             <input
//               className='form-check-input w-5 h-5 accent-blue-500 checked:bg-blue-500 border-gray-400'
//               type='checkbox'
//               id='foundation'
//             />
//             <label className='form-check-label ms-2' htmlFor='foundation'>
//               Foundation Course
//             </label>
//           </div>

//           <div className='form-check mt-2'>
//             <input
//               className='form-check-input w-5 h-5 accent-blue-500 checked:bg-blue-500 border-gray-400'
//               type='checkbox'
//               id='advance'
//             />
//             <label className='form-check-label ms-2' htmlFor='advance'>
//               Foundation Advance
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SidebarContent;

// src/components/courses/CoursesnewSidebar.jsx
// import React from "react";
// import { Nav } from "react-bootstrap";

// const CoursesnewSidebar = ({
//   categories,
//   subcategories,
//   activeCategoryId,
//   activeSubcategoryId,
//   onCategoryClick,
//   onSubcategoryClick,
//   onReset,
//   loadingCategories,
//   loadingSubcategories,
//   errorCategories,
//   errorSubcategories,
// }) => {
//   return (
//     <div className="p-3 h-100 bg-light border-end">
//       <div className="d-flex justify-content-between align-items-center mb-2">
//         <h6 className="fw-bold mb-0">Filters</h6>
//         <button className="btn btn-sm btn-link p-0" onClick={onReset}>
//           Reset
//         </button>
//       </div>
//       <hr className="mt-2" />

//       <h6 className="fw-bold">Categories</h6>
//       {loadingCategories && <p className="small">Loading...</p>}
//       {errorCategories && <p className="text-danger small">{errorCategories}</p>}
//       <Nav className="flex-column mb-3">
//         {categories.map((cat) => (
//           <Nav.Link
//             key={cat._id}
//             onClick={() => onCategoryClick(cat._id)}
//             className={`py-1 ${
//               activeCategoryId === cat._id ? "text-primary fw-bold" : ""
//             }`}
//             style={{ cursor: "pointer" }}
//           >
//             {cat.name}
//           </Nav.Link>
//         ))}
//       </Nav>

//       {activeCategoryId && (
//         <>
//           <h6 className="fw-bold">Types</h6>
//           {loadingSubcategories && <p className="small">Loading types...</p>}
//           {errorSubcategories && (
//             <p className="text-danger small">{errorSubcategories}</p>
//           )}
//           {!loadingSubcategories && subcategories.length === 0 && (
//             <p className="text-muted small">No subcategories</p>
//           )}
//           {subcategories.map((sub) => (
//             <div className="form-check mb-1" key={sub._id}>
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id={sub._id}
//                 checked={activeSubcategoryId === sub._id}
//                 onChange={() => onSubcategoryClick(sub._id)}
//               />
//               <label className="form-check-label ms-1" htmlFor={sub._id}>
//                 {sub.name}
//               </label>
//             </div>
//           ))}
//           {activeSubcategoryId && (
//             <button
//               className="btn btn-sm btn-outline-secondary mt-2"
//               onClick={() => onSubcategoryClick(activeSubcategoryId)}
//             >
//               Clear Type
//             </button>
//           )}
//         </>
//       )}
//     </div>
//   );
// };

// export default CoursesnewSidebar;

// !----------------
// components/courses/CoursesnewSidebar.jsx
import React, { useState } from "react";
import { Nav } from "react-bootstrap";

const CoursesnewSidebar = ({
  categories,
  subcategories,
  activeCategoryId,
  activeSubcategoryId,
  onCategoryClick,
  onSubcategoryClick,
  onReset,
  loadingCategories,
  loadingSubcategories,
  errorCategories,
  errorSubcategories,
}) => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const toggleMobileFilter = () => setShowMobileFilter((prev) => !prev);
  const closeMobileFilter = () => setShowMobileFilter(false);

  // Call this when any filter is clicked (category or subcategory)
  const handleCategoryClick = (id) => {
    onCategoryClick(id);
    closeMobileFilter();
  };

  const handleSubcategoryClick = (id) => {
    onSubcategoryClick(id);
    closeMobileFilter();
  };

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="d-md-none d-flex justify-content-end p-2 border-bottom bg-white">
        <button
          className="btn btn-danger"
          onClick={toggleMobileFilter}
        >
          {showMobileFilter ? "Close Filters" : "Filters"}
        </button>
      </div>

      {/* Overlay for mobile filter */}
      {showMobileFilter && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 z-50"
          onClick={closeMobileFilter}
        ></div>
      )}

      {/* Sidebar (desktop) */}
      <div
        className={`bg-light border rounded p-3 h-100 d-none d-md-block`}
        style={{ minWidth: "250px" }}
      >
        <SidebarContent
          categories={categories}
          subcategories={subcategories}
          activeCategoryId={activeCategoryId}
          activeSubcategoryId={activeSubcategoryId}
          onCategoryClick={onCategoryClick}
          onSubcategoryClick={onSubcategoryClick}
          onReset={onReset}
          loadingCategories={loadingCategories}
          loadingSubcategories={loadingSubcategories}
          errorCategories={errorCategories}
          errorSubcategories={errorSubcategories}
        />
      </div>

      {/* Mobile Drawer */}
      <div
        className={`position-fixed top-0 start-0 w-100 bg-white border-bottom z-50 shadow rounded-bottom d-md-none transition-all ${
          showMobileFilter ? "visible" : "invisible"
        }`}
        style={{
          height: "70%",
          overflowY: "auto",
          padding: "1rem",
          zIndex: 1050,
          transition: "transform 0.3s ease",
          transform: showMobileFilter ? "translateY(0%)" : "translateY(-100%)",
        }}
      >
        <SidebarContent
          categories={categories}
          subcategories={subcategories}
          activeCategoryId={activeCategoryId}
          activeSubcategoryId={activeSubcategoryId}
          onCategoryClick={handleCategoryClick} // auto-close
          onSubcategoryClick={handleSubcategoryClick} // auto-close
          onReset={() => {
            onReset();
            closeMobileFilter(); // also close on reset
          }}
          loadingCategories={loadingCategories}
          loadingSubcategories={loadingSubcategories}
          errorCategories={errorCategories}
          errorSubcategories={errorSubcategories}
        />
      </div>
    </>
  );
};

const SidebarContent = ({
  categories,
  subcategories,
  activeCategoryId,
  activeSubcategoryId,
  onCategoryClick,
  onSubcategoryClick,
  onReset,
  loadingCategories,
  loadingSubcategories,
  errorCategories,
  errorSubcategories,
}) => {
  return (
    <>
      <div className='d-flex justify-content-between align-items-center mb-2'>
        <h6 className='fw-bold mb-0'>Filters</h6>
        <button onClick={onReset} className='btn btn-sm btn-link p-0'>
          Reset
        </button>
      </div>
      <hr className='mt-2' />

      <h6 className='fw-bold'>Categories</h6>
      {loadingCategories && <p className='small mb-1'>Loading...</p>}
      {errorCategories && (
        <p className='small text-danger mb-1'>{errorCategories}</p>
      )}
      <Nav className='flex-column mb-3'>
        {categories?.map((cat) => (
          <Nav.Link
            key={cat._id}
            onClick={() => onCategoryClick(cat._id)}
            className={`py-1 ${
              activeCategoryId === cat._id ? "text-danger fw-bold" : ""
            }`}
            style={{ cursor: "pointer" }}
          >
            {cat.name}
          </Nav.Link>
        ))}
      </Nav>

      {activeCategoryId && (
        <>
          <h6 className='fw-bold'>Types</h6>
          {loadingSubcategories && <p className='small'>Loading types...</p>}
          {errorSubcategories && (
            <p className='small text-danger'>{errorSubcategories}</p>
          )}
          {!loadingSubcategories && subcategories.length === 0 && (
            <p className='small text-muted'>No types found</p>
          )}
          {subcategories.map((sub) => {
            const checked = activeSubcategoryId === sub._id;
            return (
              <div className='form-check mb-1' key={sub._id}>
                <input
                  type='checkbox'
                  className='form-check-input'
                  id={sub._id}
                  checked={checked}
                  onChange={() => onSubcategoryClick(sub._id)}
                />
                <label className='form-check-label ms-1' htmlFor={sub._id}>
                  {sub.name}
                </label>
              </div>
            );
          })}
          {activeSubcategoryId && (
            <button
              className='btn btn-sm btn-outline-secondary mt-2'
              onClick={() => onSubcategoryClick(activeSubcategoryId)}
            >
              Clear Type
            </button>
          )}
        </>
      )}
    </>
  );
};

export default CoursesnewSidebar;
