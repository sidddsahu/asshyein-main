import React from "react";
// import { BlogSidebar } from "../blogs/BlogSidebar";

export const JudgementDetailContent = ({ children, id, images, title }) => {
  // console.log("Incoming ID:", id); // Logging the incoming ID

  return (
    <section id='margin-top'>
      <div className='td_height_20 td_height_lg_30' />
      <div className='container'>
        <div>
          <h4>{title}</h4>
          <p>(Landmark Judgement)</p>
        </div>
        <div className='row td_row_reverse_lg td_gap_y_50'>
          {/* list */}

          <div className='col-lg-6'>{children}</div>
          <div className='col-lg-6'>
            <img src={images && images[0]} alt='Blog Details' />
          </div>
        </div>
      </div>
    </section>
  );
};
