import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBolg from "./pages/CreateBolg";
function App() {
  return (
    <div className="w-full h-screen bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createblog" element={<CreateBolg />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
