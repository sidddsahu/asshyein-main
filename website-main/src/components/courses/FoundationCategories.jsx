import React from "react";
import { Link } from "react-router-dom";

import user from "../../assets/img/icons/user_3.svg";
import book from "../../assets/img/icons/book.svg";
import courseThumb1 from "../../assets/alec-img/courses/course-1.jpg";
// import courseThumb2 from "../../assets/alec-img/courses/up-course.jpg";
// import courseThumb3 from "../../assets/alec-img/courses/jh-course.jpg";
// import courseThumb4 from "../../assets/alec-img/courses/bihar-course.jpg";
// import courseThumb5 from "../../assets/alec-img/courses/uttarakhand-course.jpg";
// import courseThumb6 from "../../assets/alec-img/courses/rj-course.jpg";

const courses = [
  {
    id: 1,
    label: "New",
    images: courseThumb1,
    seats: 150,
    Semester: 12,
    category: { name: "Madhya Pradesh (MP) Judiciary" },
    Coursename: "MP Foundation Advance",
    CourseDescription:
      "The Madhya Pradesh Judicial Service Examination is organized to recruit Civil Judge Grade II.",
    Review: 4.5,
    totalRatings: 5,
  },
  {
    id: 2,
    label: "New",
     images: courseThumb1,
    seats: 100,
    Semester: 20,
    category: { name: "Uttar Pradesh" },
    Coursename: "Up Foundation Advance",
    CourseDescription:
      "Judicial Service Civil Judge (Junior Division) exam conducted by UPPSC.",
    Review: 5,
    totalRatings: 10,
  },
  {
    id: 3,
    label: "New",
    images: courseThumb1,
    seats: 300,
    Semester: 8,
    category: { name: "Jharkhand Judiciary" },
    Coursename: "Bihar Foundation Advance",
    CourseDescription:
      "Organized by the Jharkhand High Court for Civil Judge recruitment.",
    Review: 5,
    totalRatings: 12,
  },
  {
    id: 4,
    label: "Best Seller",
     images: courseThumb1,
    seats: 250,
    Semester: 12,
    category: { name: "Bihar Judiciary" },
    Coursename: "Uttarakhand Foundation Advance",
    CourseDescription: "Develop skills to excel in Bihar Judicial Services.",
    Review: 4,
    totalRatings: 30,
  },
  {
    id: 5,
    label: "New",
     images: courseThumb1,
    seats: 80,
    Semester: 12,
    category: { name: "Uttarakhand Judiciary" },
    Coursename: "Up Foundation Advance",
    CourseDescription:
      "Uttarakhand CJ JD exam conducted by the state PSC to recruit judges.",
    Review: 4.5,
    totalRatings: 5,
  },
  {
    id: 6,
    label: "Best Seller",
     images: courseThumb1,
    seats: 200,
    Semester: 12,
    category: { name: "Rajasthan Judiciary" },
    Coursename: "Rajasthan Foundation Advance",
    CourseDescription:
      "Rajasthan High Court conducts RJS for Civil Judge positions.",
    Review: 4.5,
    totalRatings: 15,
  },
];

export const FoundationCategories = () => {
  return (
    <div className="row td_gap_y_30 td_row_gap_30">
 <h5 className="mb-0">Foundation Advance courses</h5>
      {courses.map((course) => (
        <div key={course.id} className=" col-lg-2 col-4 col-md-6">

          <div className="td_card td_style_3 d-block td_radius_10">

            <Link to="/course-details" className="td_card_thumb">
              <img src={course.images} />
            </Link>
            <div className=" td_white_bg">
              <div className="td_card_info_in shadow-sm ">
               
                <h2 className="td_card_title td_fs_14 td_mb_16">
                  <Link to="/course-details">{course.Coursename}</Link>
                </h2>
                {/* <p className="td_card_subtitle td_heading_color td_opacity_7 td_mb_20">
                  {course.CourseDescription}
                </p> */}
                {/* <div className="td_card_review">
                  <div className="td_rating" data-rating={course.Review}>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <i className="fa-regular fa-star"></i>
                    <div className="td_rating_percentage">
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                      <i className="fa-solid fa-star fa-fw"></i>
                    </div>
                  </div>
                  <span className="td_heading_color td_opacity_5 td_medium">
                    ({course.Review}/{course.totalRatings} Ratings)
                  </span>
                </div> */}
                {/* <div
                  className="td_card_btn"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '12px',
                    flexWrap: 'wrap',
                    marginTop: '10px',
                  }}
                >
                  <Link
                    to="/enroll"
                    className="td_btn td_style_1 td_radius_10 td_medium"
                  >
                    <span className="td_btn_in td_white_color td_accent_bg">
                      <span>Enroll Now</span>
                    </span>
                  </Link>

                  <Link
                    to="/get-offer"
                    className="td_btn td_radius_10 td_medium"
                    style={{
                      border: '2px solid #ff5722',
                      color: '#ff5722',
                      backgroundColor: '#fff',
                      padding: '10px 20px',
                      textAlign: 'center',
                      display: 'inline-block',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff5722';
                      e.currentTarget.style.color = '#fff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = '#fff';
                      e.currentTarget.style.color = '#ff5722';
                    }}
                  >
                    Get Offer
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
