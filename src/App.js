import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Offer from "./pages/Offer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <nav>Navigation</nav>
      <Link className="home" to="/home">
        Home
      </Link>
      <br />
      <Link to="/offer">Aller a la page offres</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
