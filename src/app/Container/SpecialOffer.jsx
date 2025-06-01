import CustomButton from '../Component/CustomButton'
import './SpecialOffer.css'
const SpecialOffer = () => {
  return (
    <div className="special_offer_container relative">
        <div className="page_width page_max_width mx_auto flex fl_dir_col fl_al_cen gap_20">
            <h1 className="scroll_left font_roboto fn_upper fn_9 cl_primary">50% OFF</h1>
            <h2 className='scroll_right fn_6 cl_white'>Sunday Special Offer</h2>
            <h2 className='scroll_left cl_white font_roboto tl_al_cen'>Only for Sunday from 1st Jan to 30th Jan 2045</h2>
            <div>
                <div className='scroll_right email_sign_up_container flex fl_al_cen'>
                    <input className='input_field_type_1 h_100 fn_para_3' type="email" placeholder='Enter Your Email'></input>
                    <button className='sign_up_button font_roboto bg_color_golden' type="submit">Sign Up</button>
                </div>
            </div>
        </div>
        <span className='bottom_overlay'></span>
    </div>
  )
}

export default SpecialOffer
