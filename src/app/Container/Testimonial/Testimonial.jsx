import CustomSlider from "@/app/Component/CustomSlider/CustomSlider"
import StyledHeader from "@/app/Component/StyledHeader"


const sliderContent = [
    {
        "image": "/images/testimonial-1.jpg",
        "name": "Client Name",
        "profession": "Profession",
        "talk": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet blanditiis alias ab! Modi ipsam commodi blanditiis."
    },
    {
        "image": "/images/testimonial-2.jpg",
        "name": "Client Name",
        "profession": "Profession",
        "talk": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet blanditiis alias ab! Modi ipsam commodi blanditiis."
    },
    {
        "image": "/images/testimonial-3.jpg",
        "name": "Client Name",
        "profession": "Profession",
        "talk": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet blanditiis alias ab! Modi ipsam commodi blanditiis."
    },
    {
        "image": "/images/testimonial-4.jpg",
        "name": "Client Name",
        "profession": "Profession",
        "talk": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus eveniet blanditiis alias ab! Modi ipsam commodi blanditiis."
    },
    
]


const Testimonial = () => {
  return (
    <div className="component_container ">
        <div className="testimonial_inner_container page_width page_max_width mx_auto pg_block_80 ">
            <StyledHeader header_subtitle={"Testimonial"} header_title={"Our Clients Say"} />
            <CustomSlider slideItems={sliderContent} />
        </div>
    </div>
  )
}

export default Testimonial
