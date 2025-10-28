import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";

// 🔹 Pages (Main + Subfolders)
import AboutUs from "./components/about/AboutUs";
import AboutUsSkills from "./components/about/AboutUsSkills";

import Portfolio from "./components/portfolio/Portfolio";
import ContactForm from "./components/contact/ContactForm";
import ContactUs from "./components/contact/ContactUs"

import Services from "./components/Services/Services";
import ServicesCard from "./components/Services/ServicesCard";
import ServicesDrop from "./components/Services/ServicesDrop";
import ServicesPageCol from "./components/Services/ServicesPageCol";

// 🔹 Other Pages
import Advisor from "./components/Advisor";
import Analysis from "./components/Analysis";
import Dolorsite from "./components/Dolorsite";
import ICOS from "./components/ICOS";
import Faqs from "./components/Faqs";
import Featured from "./components/Featured";
import Whitepaper from "./components/Whitepaper";
import Pricing from "./components/Pricing";
import TeamSection from "./components/TeamSection";
import Blog from "./components/Blog";
import Email from "./components/Email";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <TopBar />
        <Navbar />

        <Routes>
          {/* 🏠 Home Page */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <Services />
                <Advisor />
                <Analysis />
                <Dolorsite />
                <ICOS />
                <Faqs />
                <Featured />
                <Whitepaper />
                <Pricing />
                <TeamSection />
                <Blog />
                <Email />
                <ContactForm />
              </>
            }
          />

          {/*  About Us Section */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about" element={<AboutUsSkills />} />

          {/*  Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/*  Services Section */}
          <Route path="/services" element={<Services />} />
          <Route path="/services/servicesCard" element={<ServicesCard />} />
          <Route path="/services/drop" element={<ServicesDrop />} />
          <Route path="/services/pagecol" element={<ServicesPageCol />} />

          {/*  Contact Us */}
          <Route path="/contact" element={<ContactUs />} />

          {/*  Other Pages */}
          <Route path="/featured" element={<Featured />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
