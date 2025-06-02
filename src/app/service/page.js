import CustomHeader from "../Component/CustomHeader"
import Service from "../Container/Services/Service"


const page = () => {
  return (
    <div className="page_main_container">
      <CustomHeader content={"Our Services"} />
      <Service />
    </div>
  )
}

export default page
