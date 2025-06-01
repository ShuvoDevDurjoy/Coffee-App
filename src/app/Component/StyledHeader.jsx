import './Component.css';

const StyledHeader = ({header_subtitle, header_title}) => {
  return (
    <div className="styled_header relative">
      <h3 className="scroll_left fn_upper fn_5 w_s_2 cl_g font_roboto">{header_subtitle}</h3>
      <h1 className="scroll_right fn_capitalize fn_8 ln_1_4 cl_coffee_dark font_roboto fn_w_700 tl_al_cen">
        {header_title}
      </h1>
    </div>
  );
};

export default StyledHeader;
