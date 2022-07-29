import "./App.scss";
import "./assets/css/main.scss";
import "./assets/css/test.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";

// import Header from "./components/Header";
function App() {
  return (
    <Router>
      {/* <Link className="home" to="/home">
        Home
      </Link> */}

      {/* <Link to="/offer">Aller a la page offres</Link> */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/offer/:id" element={<Offer />} />
      </Routes>
    </Router>
  );
}

export default App;
