import Image from "next/image";
import "./Component.css";

const CardComponent = ({ card_image, icon, title, description, classes }) => {
  return (
    <div className={`${classes} card_component_container grid gap_10 relative`}>
      <div className="scroll_bottom card_image_container relative">
        <Image className="scroll_bottom" src={card_image} fill="auto" alt="" />
      </div>
      <div className="card_content_header flex gap_10 fl_al_cen fl_jus_cen">
        <span className="service_icon flex fl_al_cen bg_color_golden br_50">
          <i className={`${icon} scroll_bottom bg_color_golden br_50 mx_auto`}></i>
        </span>
        <div className="card_content_title">
          <h3 className="scroll_left fn_para_3">{title}</h3>
        </div>
      </div>
      <div className="card_content_desc">
        <p className="scroll_right font_mono">{description}</p>
      </div>
    </div>
  );
};

export default CardComponent;
