import Navbar from "@/components/user/Navbar";
import Hero from "@/components/user/Hero";
import BadgeDemo from "@/components/user/BadgeDemo";
import Container from "@/components/user/Container";
import QuickFilters from "@/components/user/QuickFilters";
import Job from "@/components/user/Job";
import TestimonialCarousel from "@/components/user/TestimonialCarousel"; 
import Footer from "@/components/user/Footer";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <BadgeDemo/>
      <Hero/>
      <Container>
        <QuickFilters/>
        <Job/>
        <TestimonialCarousel/>
      </Container>
      <Footer/>
    </div>
  )
}

export default Home;