import React from "react";
import Slider from "react-slick"; // react-slick install करना होगा
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SubSubcategorySlider = ({
  subSubcategories,
  activeSubSubcategoryId,
  onSubSubcategoryClick,
  loading,
  error,
}) => {
  if (loading) return <p>Loading sub-subcategories...</p>;
  if (error) return <p className='text-danger'>{error}</p>;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {subSubcategories.map((item) => (
        <div key={item._id} className='p-2'>
          <button
            className={`btn w-100 ${
              activeSubSubcategoryId === item._id
                ? "btn-primary"
                : "btn-outline-primary"
            }`}
            onClick={() => onSubSubcategoryClick(item._id)}
          >
            {item.name}sourabh
          </button>
        </div>
      ))}
    </Slider>
  );
};

export default SubSubcategorySlider;
