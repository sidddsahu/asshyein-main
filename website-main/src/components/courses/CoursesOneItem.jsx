import React from "react";
import { Link } from "react-router-dom";

import userIcon from "../../assets/img/icons/user_3.svg";
import bookIcon from "../../assets/img/icons/book.svg";
import { FaRupeeSign } from "react-icons/fa";
import { GiDuration } from "react-icons/gi";
import { useSelector } from "react-redux";
export const CoursesOneItem = ({
  src,
  seats,
  semesters,
  subtitle,
  title,
  description,
  totalRatings,
}) => {
  const { routesData } = useSelector((state) => state.routes);

  const { path } = routesData.find((route) => route.element === "CouresesFull");

  return (
    <div className='td_card td_style_3 d-block td_radius_10'>
      <Link to='/course-details' className='td_card_thumb'>
        <img src={src} alt='Course thumbnail' />
      </Link>
      <div className='td_card_info td_white_bg'>
        <div className='td_card_info_in'>
          <ul className='td_card_meta td_mp_0 td_fs_18 td_medium td_heading_color'>
            <li>
              <FaRupeeSign />
              <span className='td_opacity_7'>{seats}</span>
            </li>
            <li>
              {/* <img src={bookIcon} alt="Book icon" /> */}
              <GiDuration />
              <span className='td_opacity_7'>{semesters} Months</span>
            </li>
          </ul>

          <Link
            to='/courses-grid-with-sidebar'
            className='td_card_category td_fs_14 td_bold td_heading_color td_mb_14'
          >
            <span>{subtitle}</span>
          </Link>

          <h2 className='td_card_title td_fs_24 td_mb_16'>
            <Link to='/course-details'>{title}</Link>
          </h2>

          <p className='td_card_subtitle td_heading_color td_opacity_7 td_mb_20'>
            {/* <span style={{fontWeight:'800'}}>Trainer: </span>   {description} */}
          </p>

          <div
            className='td_card_btn'
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "10px",
            }}
          >
            <Link
              to='/enroll'
              className='td_btn td_style_1 td_radius_10 td_medium'
            >
              <span className='td_btn_in td_white_color td_accent_bg'>
                <span>Enroll Now</span>
              </span>
            </Link>

            <Link
              to='/get-offer'
              className='td_btn td_radius_10 td_medium'
              style={{
                border: "2px solid #ff5722",
                color: "#ff5722",
                backgroundColor: "#fff",
                padding: "10px 20px",
                textAlign: "center",
                display: "inline-block",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#ff5722";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#ff5722";
              }}
            >
              Get Offer
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
