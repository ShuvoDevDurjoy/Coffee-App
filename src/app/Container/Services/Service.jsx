import StyledHeader from "@/app/Component/StyledHeader"
import './Service.css'
import CardComponent from "@/app/Component/CardComponent"

const Service = () => {
  return (
    <div className="component_container">
      <StyledHeader header_subtitle={"Our Services"} header_title={"Fresh & Organic Beans"} />
      <div className="service_content_container">
        <div className="page_width page_max_width mx_auto grid service_container_grid gap_30 pd_block_40">
            <CardComponent classes={'scroll_left'} card_image={"/images/service-1.jpg"} icon={"fa fa-truck"} title={"Fastest Door Delivery"} description={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
            <CardComponent classes={'scroll_right'} card_image={"/images/service-2.jpg"} icon={"fa fa-coffee"} title={"Fastest Door Delivery"} description={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
            <CardComponent classes={'scroll_left'} card_image={"/images/service-3.jpg"} icon={"fa fa-award"} title={"Fastest Door Delivery"} description={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
            <CardComponent classes={'scroll_right'} card_image={"/images/service-4.jpg"} icon={"fa fa-table"} title={"Fastest Door Delivery"} description={"Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor"} />
        </div>
      </div>
    </div>
  )
}

export default Service
