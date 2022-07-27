import { BrowserRouter as Route, Link } from "react-router-dom";

// import { Link } from "react-router-dom";
import Header from "../components/Header";
const Home = () => {
  return (
    <div className="page_home">
      <h1>Homedd</h1>
      <Header />

      <Link to={`/Offer`}>Aller sa la page Offres</Link>
    </div>
  );
};

export default Home;
