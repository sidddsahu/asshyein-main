import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchSubSubcategories } from "../Redux/features/sub-subCategory/subSubcategoryThunk";

export const SliderCard = ({ selectedSubCategoryId, onSlideClick }) => {
  const dispatch = useDispatch();

  const { subSubcategories, loading, error } = useSelector(
    (s) => s.subSubcategories
  );

  useEffect(() => {
    dispatch(fetchSubSubcategories());
  }, [dispatch]);

  const sliderSettings = {
    dots: true,
    infinite: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } },
    ],
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='course-slider-wrapper mb-5'>
      <Slider {...sliderSettings}>
        {subSubcategories.map(({ _id, name, images }) => (
          <div
            key={_id}
            className={`p-2 ${
              _id === selectedSubCategoryId ? "selected-slide" : ""
            } cursor-pointer`}
            onClick={() => onSlideClick?.({ id: _id, name })}
            style={{ cursor: "pointer" }}
          >
            <div className='td_card td_style_3 d-block td_radius_10'>
              <img
                src={images?.[0] || "/default-image.jpg"}
                alt={name || "Course"}
                className='img-fluid'
                style={{
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <div className='p-2 td_white_bg'>
                <div className='td_card_info_in'>
                  <h5 className='td_card_title text-center td_fs_14 td_mb_16'>
                    {name || "Judiciary Course"}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
