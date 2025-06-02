import Image from 'next/image';
import './CustomHeader.css';

const CustomHeader = ({content}) => {
  return (
    <div className='custom_header_container pd_block_80 relative'>
        <div className="header_inner_container flex fl_dir_col fl_jus_cen fl_al_cen page_width mx_auto page_max_width relative pd_block_40">
          <h1 className='fn_capitalize fn_8 cl_primary fn_mono'>{content}</h1>
        </div>
        <span className='background_image_wrapper'>
          <Image fill="auto" src="./images/bg.jpg" alt={`${content}_back_image`} />
        </span>
    </div>
  )
}

export default CustomHeader
