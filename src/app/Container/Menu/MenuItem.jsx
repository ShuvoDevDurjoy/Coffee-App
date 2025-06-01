import Image from "next/image"
import './Menu.css'

const MenuItem = ({image, title, price, desc, classes}) => {
  return (
    <div className={`${classes} menu_item_container flex fl_al_cen gap_20`}>
        <div className="scroll_bottom item-image relative item-image-container br_50">
            <Image className="br_50" fill="auto" src={image} />
            <p className="scroll_right abs bg_color_golden menu_item_price flex fl_dir_cl br_50 fn_para_3 cl_coffee_dark font_roboto">{price}</p>
        </div>
        <div className="flex fl_dir_col gap_10">
            <h2 className="scroll_left">{title}</h2>
            <p className="scroll_bottom font_mono fn_para_2">{desc}</p>
        </div>
    </div>
  )
}

export default MenuItem
