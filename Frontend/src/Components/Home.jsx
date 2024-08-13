import React from "react";
import { useRef } from "react";
import Header from "../Components/Header/Header";
import HeroSection from "../Components/Hero-Section/HeroSection";
import CompanySection from "../Components/Company-section/Company";
import AboutUs from "../Components/About-us/AboutUs";
import Courses from "../Components/Courses-section/Courses";
import ChooseUs from "../Components/Choose-us/ChooseUs";
import Features from "../Components/Feature-section/Features";
import FreeCourse from "../Components/Free-course-section/FreeCourse";
import Testimonials from "../Components/Testimonial/Testimonials";
import Newsletter from "../Components/Newsletter/Newsletter";
import Footer from "../Components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const courseSectionRef = useRef(null); // Create a ref for the About Us section

  const handleScrollToAbout = () => {
    if (courseSectionRef.current) {
      courseSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div className="home-container">
      <Header />
      <section id="home">
        <HeroSection onExploreClick={handleScrollToAbout} />
      </section>
      <section id="about">
        <CompanySection />
        <AboutUs />
      </section>
      <section id="courses">
        <Courses />
      </section>
      <section id="pages">
        <ChooseUs />
      </section>
      <section id="blog">
        <Features />
      </section>
      <section id="testimonials">
        <FreeCourse />
        <Testimonials />
      </section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
