'use client'

import { useState, useRef } from "react";
import "./Reservation.css";

const Reservation = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const inputFields = useRef([]);

  const setRef = (ref) => {
    if (ref && !inputFields.current.includes(ref)) {
      inputFields.current.push(ref);
    }
  };

  return (
    <div>
      <div className="page_width page_max_width mx_auto grid reservation_container_grid gap_30 relative">
        <span className="back_image abs w_100 h_100"></span>
        <div className="grid-item pd_block_80 pd_inline_20 reservation_left flex fl_dir_col gap_20">
          <h1 className="scroll_bottom fn_upper fn_9 cl_primary">30% Off</h1>
          <h2 className="scroll_left fn_8 cl_white font_roboto ln_h_1">
            For Online Reservation
          </h2>
          <p className="scroll_right font_mono fn_para_2 cl_white ln_1_4">
            Lorem justo clita erat lorem labore ea, justo dolor lorem ipsum ut
            sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam.
            Ea et erat ut sed diam sea
          </p>
          <ul className="flex fl_dir_col li_none gap_10">
            <li className="scroll_left check_icon_list-item relative flex gap_10 fl_al_cen">
              <span className="fa fa-check cl_golden check_icon"></span>
              <p className="fn_para_2 cl_white font_roboto">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="scroll_right check_icon_list-item relative flex gap_10 fl_al_cen">
              <span className="fa fa-check cl_golden check_icon"></span>
              <p className="fn_para_2 cl_white font_roboto">
                Lorem ipsum dolor sit amet
              </p>
            </li>
            <li className="scroll_left check_icon_list-item relative flex gap_10 fl_al_cen">
              <span className="fa fa-check cl_golden check_icon"></span>
              <p className="fn_para_2 cl_white font_roboto">
                Lorem ipsum dolor sit amet
              </p>
            </li>
          </ul>
        </div>
        <div className="reservation_form_container pd_block_80 flex fl_dir_col fl_al_cen gap_20">
          <h2 className="scroll_bottom fn_capitalize fn_5 cl_white">Book Your Table</h2>
          <form action="">
            <div className="flex fl_dir_col gap_20 w_100 ">
              {[
                { type: "text", placeholder: "Name", name: "name" },
                { type: "email", placeholder: "Email", name: "email" },
                { type: "text", placeholder: "Date" },
                { type: "text", placeholder: "Time" },
              ].map((input, i) => (
                <input
                  key={i}
                  ref={setRef}
                  className={`scroll_bottom input_type_2 font_roboto ${
                    activeIndex === i ? "active" : ""
                  }`}
                  type={input.type}
                  name={input.name || ""}
                  placeholder={input.placeholder}
                  onFocus={() => setActiveIndex(i)}
                  onBlur={() => setActiveIndex(null)}
                />
              ))}
              <select
                className={`scroll_bottom input_type_2 font_roboto ${
                  activeIndex === 4 ? "active" : ""
                }`}
                onFocus={() => setActiveIndex(4)}
                onBlur={() => setActiveIndex(null)}
                defaultValue=""
              >
                <option className="cl_gray" value="" disabled>
                  Person
                </option>
                <option value="1">1 Person</option>
                <option value="2">2 Person</option>
                <option value="3">3 Person</option>
                <option value="4">4 Person</option>
                <option value="5">5 Person</option>
                <option value="6">6 Person</option>
              </select>
              <button className="fn_upper fn_para_1 font_mono reservation_submit_button" type="submit">Book now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
