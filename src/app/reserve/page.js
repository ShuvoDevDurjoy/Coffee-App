import CustomHeader from "../Component/CustomHeader"
import Reservation from "../Container/Reservation/Reservation"


const page = () => {
  return (
    <div className="page_main_container">
      <CustomHeader content={"Book a table"} />
      <Reservation />
    </div>
  )
}

export default page
