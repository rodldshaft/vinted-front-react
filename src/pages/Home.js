// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <div className="page_home">
      <h1>Home</h1>
      <Header />
      {/* <Route path="/home" element={<Header />} /> */}
      <Link to={`/Offer`}>Aller a la page Offres</Link>
    </div>
  );
};

export default Home;
