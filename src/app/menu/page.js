import CustomHeader from "../Component/CustomHeader"
import Menu from "../Container/Menu/Menu"


const page = () => {
  return (
    <div className="page_main_container">
      <CustomHeader content={"Our Menus"}  />
      <Menu />
    </div>
  )
}

export default page
