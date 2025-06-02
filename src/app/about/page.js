import CustomHeader from "../Component/CustomHeader"
import AboutUs from "../Container/AboutUs/AboutUs"


const about = () => {
  return (
    <div className="page_main_container">
      <CustomHeader content={"About us"} />
      <AboutUs />
    </div>
  )
}

export default about
