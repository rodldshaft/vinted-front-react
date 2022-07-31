import "./App.scss";
// import "./assets/css/main.scss";
import "./assets/css/offer.scss";
import "./assets/css/test.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="/offer/:offerId" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
