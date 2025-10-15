import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./pages/Services";
import Advisor from "./pages/Advisor";
import Analysis from "./pages/Analysis";
import Dolorsite from "./pages/Dolorsite";
import ICOS from "./pages/ICOS";
import Faqs from "./pages/Faqs";
import Featured from "./pages/Featured";
import Whitepaper from "./pages/Whitepaper";
function App() {
  return (
    <div className="font-sans">
      <TopBar />
      <Navbar />
      <Home />
      <Services/>
      <Advisor/>
      <Analysis/>
      <Dolorsite/>
      <ICOS/>
      <Faqs/>
      <Featured/>
      <Whitepaper/>
    </div>
  );
}

export default App;
