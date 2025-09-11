import React from "react";

import videoBg from "../../assets/img/home_1/video_bg.jpg";
import { VideoPlayer } from "./VideoPlayer";

export const VideoOne = () => {
  return (
    <section>
         <iframe height={500}  style={{ height:"600px !important", width:"60%"}} src="https://www.youtube.com/embed/tGhKMa1eajg?si=e7_XzjLZW34CxlkN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

      <div
        className="container wow fadeInUp"
        data-wow-duration="1s"
        data-wow-delay="0.25s"
      >
        <div className="td_contact_box td_style_1 td_accent_bg td_radius_10">
          <div className="td_contact_box_left">
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Get In Touch:
            </p>
            <h3 className="td_fs_36 mb-0 td_white_color">
              <a href="mailto:info@eduon.com">info@eduon.com</a>
            </h3>
          </div>
          <div className="td_contact_box_or td_fs_24 td_medium td_white_bg td_white_bg td_center rounded-circle td_accent_color">
            or
          </div>
          <div className="td_contact_box_right">
            <p className="td_fs_18 td_light td_white_color td_mb_4">
              Get In Touch:
            </p>
            <h3 className="td_fs_36 mb-0 td_white_color">
              <a href="tel:+019987698870">+01 998 7698 870</a>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};
