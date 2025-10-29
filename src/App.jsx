// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🔹 Components
import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";

// 🔹 About Pages
import AboutUs from "./components/about/AboutUs";
import AboutUsSkills from "./components/about/AboutUsSkills";

// 🔹 Portfolio
import Portfolio from "./components/portfolio/Portfolio";

// 🔹 Contact
import ContactForm from "./components/contact/ContactForm";
import ContactUs from "./components/contact/ContactUs";

// 🔹 Services
import Services from "./components/Services/Services";
import ServicesCard from "./components/Services/ServicesCard";
import ServicesDrop from "./components/Services/ServicesDrop";
import ServicesPageCol from "./components/Services/ServicesPageCol";

// 🔹 Other Pages
import Advisor from "./components/Advisor";
import Analysis from "./components/Analysis";
import Dolorsite from "./components/Dolorsite"; // ✅ Added Dolorsite import
import ICOS from "./components/ICOS";
import Faqs from "./components/Faqs";
import Featured from "./components/Featured";
import Whitepaper from "./components/Whitepaper";
import Pricing from "./components/Pricing";
import TeamSection from "./components/TeamSection";
import Blog from "./components/Blog";
import Email from "./components/Email";
import MapSection from "./components/MapSection";

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
                <Advisor />
                <Analysis />
                <Dolorsite /> {/* ✅ Appears on homepage */}
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

          {/* 🧩 About Us */}
          <Route path="/about" element={<AboutUs />} />
          <Route path="/src/components/about/AboutUsSkills.jsx" element={<AboutUsSkills />} />

          {/* 🗂 Portfolio */}
          <Route path="/portfolio" element={<Portfolio />} />

          {/* 🛠 Services */}
          <Route path="/src/components/Services/Services.jsx" element={<Services />} />
          <Route path="/src/components/Services/ServicesPageCol.jsx" element={<ServicesPageCol />} />
          <Route path="/services/drop" element={<ServicesDrop />} />
          <Route path="/services/pagecol" element={<ServicesPageCol />} />

          {/* ⚙️ Dynamic Slug Routes */}
          <Route path="/src/components/Services/Services.jsx:slug" element={<Services />} />
          {/* Example → /services/web-development */}

          {/* ✅ Dolorsite as a slug route */}
          <Route path="/src/components/Services/Services.jsx/dolorsite" element={<Dolorsite />} />
          {/* Now you can open Dolorsite directly at /services/dolorsite */}

          {/* 📞 Contact */}
          <Route path="/contact" element={<ContactUs />} />

          {/* ⭐ Featured Page */}
          <Route path="/featured" element={<Featured />} />
        </Routes>

        <MapSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
