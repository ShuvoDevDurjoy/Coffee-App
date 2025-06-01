import './Footer.css'

const Footer = () => {
  return (
    <div className="scroll_bottom footer_container flex fl_dir_col gap_20 pd_block_80 relative">
        <span className='bg_wrapper'></span>
        <div className='pg_block_40 grid footer_grid_container page_width mx_auto gap_30'>
            <div className='grid-item bg flex fl_dir_col gap_30 fl_jus_bet fn_w_400'>
                <h2 className='scroll_bottom fn_mid cl_white'>Get In Touch</h2>

                <p className='scroll_left fn_para_1 font_mono flex gap_30 cl_white'>
                    <i className='fa fa-map-marker-alt mr-2'></i>
                    <span>123 Street, New York, USA</span>
                </p>
                <p className='scroll_right fn_para_1 font_mono flex cl_white gap_20'>
                    <i className='fa fa-phone-alt mr-2'></i>
                    <span>+012 345 67890</span>
                </p>
                <p className='scroll_left fn_para_1 font_mono flex cl_white gap_20'>
                    <i className='fa fa-envelope mr-2'></i>
                    <span>shuvo.dev@gmail.com</span>
                </p>

            </div>
            <div className='grid-item bg flex fl_dir_col fl_jus_bet gap_30'>
                <h2 className='scroll_bottom fn_mid cl_white'>Follow Us</h2>
                <p className='scroll_right fn_para_1 font_mono cl_white'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <div className="footer_links flex gap_20">
                    <a className='scroll_bottom social_icon' href="#">
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a className='scroll_bottom social_icon' href="#">
                        <i className='fab fa-facebook-f'></i>
                    </a>
                    <a className='scroll_bottom social_icon' href="#">
                        <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a className='scroll_bottom social_icon' href="#">
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
            </div>
            <div className='grid-item bg flex fl_dir_col fl_jus_bet gap_20'>
                <h2 className='scroll_bottom fn_upper fn_mid cl_white'>Open Hours</h2>
                <div className='flex fl_dir_col gap_10'>
                    <p className='scroll_left fn_para_1 cl_white font_mono'>Monday - Friday</p>
                    <p className='scroll_right fn_para_1 cl_white font_mono'>8.00 AM - 8.00 PM</p>
                </div>
                <div className='flex fl_dir_col gap_10'>
                    <p className='scroll_right fn_para_1 cl_white font_mono'>Saturday - Sunday</p>
                    <p className='scroll_left fn_para_1 cl_white font_mono'>2.00 PM - 8.00 PM</p>
                </div>
            </div>

            <div className="grid-item bg flex fl_dir_col fl_jus_bet gap_20">
                <h2 className="scroll_bottom fn_upper fn_mid cl_white font_mono">Newsletter</h2>
                <p className='scroll_left fn_para_1 cl_white font_mono'>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
                <form>
                    <div className='scroll_bottom newsletter_form flex fl_jus_bet'>
                        <input className='fn_para_1 font_mono' type="email" name="" id="" placeholder='Email' />
                        <button className='fn_para_1' type="submit">Sign Up</button>
                    </div>
                </form>
            </div>
        </div>
        <span className='bar'></span>
        <div className="footer_copyright flex fl_dir_col gap_10 fl_jus_cen fl_ali_cen">
            <p className='mx_auto fn_para_2 cl_white font_mono tl_al_cen'>Copyright © <span className='cl_golden relative bar_bottom'>Domain</span>. All Rights Reserved.</p>
            <p className='mx_auto fn_para_2 cl_white font_mono tl_al_cen'>Designed by <span className='cl_golden relative bar_bottom'>HTML Codex</span> Distributed by <span className='cl_golden relative bar_bottom'>ThemeWagon</span></p>
        </div>
        <span className='bg_wrapper_color'></span>
    </div>
  )
}

export default Footer
