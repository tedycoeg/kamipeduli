import About from "../fragments/About";
import Carousel from "../fragments/Carousel";
import Causes from "../fragments/Causes";
import Navbar from "../fragments/Navbar";
import Spinner from "../fragments/Spinner";
import Service from "../fragments/Service";
import Donasiberanda from "../fragments/Donasiberanda";
import TestimonialCarousel from "../fragments/Testimonials";
import Footer from "../fragments/Footer";

const Home = () => {
  return (
    <>
      <Spinner />
      <Navbar />
      <Carousel />
      <About />
      <Causes />
      <Service />
      <Donasiberanda />
      <TestimonialCarousel />
      <Footer />
    </>
  );
};
export default Home;
