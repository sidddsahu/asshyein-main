import React from "react";

import funfactIcon1 from "../../assets/img/home_4/funfact_icon_1.svg";
import funfactIcon2 from "../../assets/img/home_4/funfact_icon_2.svg";
import funfactIcon3 from "../../assets/img/home_4/funfact_icon_3.svg";
import funfactIcon4 from "../../assets/img/home_4/funfact_icon_4.svg";
import { Odometer } from "../odometer/Odometer";

export const FunfactTwo = () => {
  return (
    <section>
      <div className="td_height_40 td_height_lg_40" />
      <div className="container-fluid td_plr_60">
        <div className="row td_gap_y_30">
          <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
            <div className="td_funfact td_style_2">
              <div className="td_funfact_border" />
              <div className="td_funfact_icon td_center td_accent_bg">
                <img src={funfactIcon1} alt="Qualified Teachers Icon" />
              </div>
              <div className="td_funfact_right td_accent_bg">
                <h3 className="td_funfact_number mb-0 text-white td_fs_36 d-flex">
                  <Odometer end={5000} suffix={"+"} />
                </h3>
                <p className="m-0 td_fs_16 text-white td_medium">
                online Test
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
            <div className="td_funfact td_style_2">
              <div className="td_funfact_border" />
              <div className="td_funfact_icon td_center td_accent_bg">
                <img src={funfactIcon2} alt="Students Icon" />
              </div>
              <div className="td_funfact_right td_accent_bg">
                <h3 className="td_funfact_number mb-0 text-white td_fs_36 d-flex">
                  <Odometer end={9600} suffix={"+"} />
                </h3>
                <p className="m-0 td_fs_16 text-white td_medium">
                Satisfied Students
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
            <div className="td_funfact td_style_2">
              <div className="td_funfact_border" />
              <div className="td_funfact_icon td_center td_accent_bg">
                <img src={funfactIcon3} alt="Awards Icon" />
              </div>
              <div className="td_funfact_right td_accent_bg">
                <h3 className="td_funfact_number mb-0 text-white td_fs_36 d-flex">
                  <Odometer end={10} suffix={"+"} />
                </h3>
                <p className="m-0 td_fs_16 text-white td_medium">
                years of Experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-xxl-3 col-md-6 d-flex justify-content-center">
            <div className="td_funfact td_style_2">
              <div className="td_funfact_border" />
              <div className="td_funfact_icon td_center td_accent_bg">
                <img src={funfactIcon4} alt="Experience Icon" />
              </div>
              <div className="td_funfact_right td_accent_bg">
                <h3 className="td_funfact_number mb-0 text-white td_fs_36 d-flex">
                  <Odometer end={12400} suffix={"+"} />
                </h3>
                <p className="m-0 td_fs_16 text-white td_long">
                Students Community
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="td_height_40 td_height_lg_20" />
    </section>
  );
};
