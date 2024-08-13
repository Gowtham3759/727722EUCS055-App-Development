import React, { Fragment, useRef } from "react";
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
      <Header/>
      <HeroSection onExploreClick={handleScrollToAbout} /> {/* Pass the scroll handler */}
      <CompanySection />
        <AboutUs />
      <div ref={courseSectionRef}> {/* Attach the ref to the About Us section */}
        <Courses />
      </div>
      <ChooseUs />
      <Features />
      <FreeCourse />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;