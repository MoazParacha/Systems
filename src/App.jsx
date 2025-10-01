import { Routes, Route } from "react-router-dom";
import Landingpage from "./pages/landingpage";
import Navbar from "./componentes/navbar";
import Digital from "./pages/Digital";
import Communications from "./pages/Communications";


const App = () => {
  return (
    <div>
      <Navbar/>
      
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/Digital" element={<Digital/>} />
      <Route path="/Communications" element={<Communications/>} />
    </Routes>
    </div>
  );
};

export default App;