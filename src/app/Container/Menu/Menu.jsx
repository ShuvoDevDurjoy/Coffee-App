import StyledHeader from "@/app/Component/StyledHeader"
import MenuItem from "./MenuItem"
import MenuItemGrid from "./MenuItemGrid"

 

const Menu = () => {
  return (
    <div className="component_container">
      <StyledHeader header_subtitle={"Menu & Pricing"} header_title={"Competitive Pricing"} />
      <MenuItemGrid />
    </div>
  )
}

export default Menu
