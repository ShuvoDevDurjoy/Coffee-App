import './Component.css'
const CustomButton = ({button_text, button_link, classes}) => {
  return (
    <div className="scroll_bottom custom_button_container cl_white">
        <a className={`custom_button_link bg_dark_coffee cl_white ${classes}`} href={button_link}>
          <span className='button_link_text'>{button_text}</span>
        </a>
    </div>
  )
}

export default CustomButton
