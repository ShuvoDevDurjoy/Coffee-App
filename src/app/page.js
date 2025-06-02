import AboutUs from "./Container/AboutUs/AboutUs";
import Footer from "./Container/Footer/Footer";
import Hero from "./Container/Hero/Hero";
import Menu from "./Container/Menu/Menu";
import Reservation from "./Container/Reservation/Reservation";
import Service from "./Container/Services/Service";
import SpecialOffer from "./Container/SpecialOffer";
import Testimonial from "./Container/Testimonial/Testimonial";
import RevealOnScroll from "./Component/RevealOnScroll";

const page = () => {
  return (
    <div className="page_main_container">
      <Hero />
      <AboutUs />
      <Service />
      <SpecialOffer />
      <Menu />
      <Reservation />
      <Testimonial />
      <RevealOnScroll />
    </div>
  );
};

export default page;
