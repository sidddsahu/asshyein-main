import React from "react";
import { BlogSidebar } from "./BlogSidebar";
import MarqueeStrike from "../popup/MarqueeStrike";

export const BlogContainer = ({ children }) => {
  return (

     <>

       <section id="marginsss-top">
<MarqueeStrike />
      {/* <div className="td_height_12 td_height_lg_30" /> */}
      <div className="container mt-1">
        <div className="row td_row_reverse_lg td_gap_y_50 justify-content-center">
          {/* list */}
          <div className="col-lg-8">{children}</div>
        </div>
      </div>
      {/* <div className="td_height_120 td_height_lg_80" /> */}
    </section>
     </>

  );
};
