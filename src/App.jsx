import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import Digital from "./pages/Digital";
import Communications from "./pages/Communications";
import Contact from "./pages/Contact";


const App = () => {
  return (
    <div>
      <Navbar />
      
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Digital" element={<Digital/>} />
      <Route path="/Communications" element={<Communications/>} />
      <Route path="/Contact" element={<Contact/>} />
      
    </Routes>

    <Footer />
    </div>
  );
};

export default App;