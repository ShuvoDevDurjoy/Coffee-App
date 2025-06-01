import Image from 'next/image'
import './AboutUs.css'
import CustomButton from '@/app/Component/CustomButton'
import StyledHeader from '@/app/Component/StyledHeader'


const AboutUs = () => {
  return (
    <div className="component_container">
        <StyledHeader header_subtitle={"About Us"} header_title={"Serving Since 1950"} />
        <div className="about_us_content_container">
            <div className="page_width page_max_width mx_auto grid about_us_content_grid gap_20">
                <div className='grid-item tx_al_left flex gap_20 fl_dir_col pd_block_40 fl_jus_bet'>
                    <h2 className='scroll_left fn_mid_2 fn_w_700 font_roboto cl_coffee_dark'>Our Story</h2>
                    <p className='scroll_right fn_para_2 cl_coffee mx_90'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut porro soluta, illum voluptatem delectus assumenda sit id fuga rerum.</p>
                    <p className='scroll_left fn_para_1 font_mono cl_coffee'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, hic minima neque vel delectus possimus deleniti quo cum omnis eligendi quos reprehenderit saepe magnam impedit pariatur, labore quis, voluptas maxime!</p>
                    <CustomButton button_text={"Learn More"} button_link={"/"} />
                </div>
                <div className='scroll_bottom w_100 h_100 relative flex fl_dir_col about_us_image_container'>
                    <Image className='image_fit' src="./images/about.png" fill="auto" />
                </div>
                <div className='grid-item tx_al_left flex gap_20 fl_dir_col pd_block_40 fl_jus_bet'>
                    <h2 className='scroll_right fn_mid_2 fn_w_700 font_roboto cl_coffee_dark'>Our Vision</h2>
                    <p className='scroll_left fn_para_1 font_mono cl_coffee'>Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos, ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est dolor</p>
                    <ul className='flex fl_dir_col li_none gap_10'>
                        <li className='scroll_bottom check_icon_list-item relative flex gap_10 fl_al_cen'>
                            <span className='fa fa-check cl_golden check_icon'></span>
                            <p className='fn_para_2 cl_coffee font_roboto'>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li className='scroll_bottom check_icon_list-item relative flex gap_10 fl_al_cen'>
                            <span className='fa fa-check cl_golden check_icon'></span>
                            <p className='fn_para_2 cl_coffee font_roboto'>Lorem ipsum dolor sit amet</p>
                        </li>
                        <li className='scroll_bottom check_icon_list-item relative flex gap_10 fl_al_cen'>
                            <span className="fa fa-check cl_golden check_icon"></span>
                            <p className='fn_para_2 cl_coffee font_roboto'>Lorem ipsum dolor sit amet</p>
                        </li>
                    </ul>
                    <CustomButton button_text="Learn More" button_link={"/"} classes={"bg_color_golden cl_coffee"} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
