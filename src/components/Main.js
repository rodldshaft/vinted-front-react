import axios from "axios";
// import Home from "./pages/Home";
import { useState, useEffect, Link } from "react";

const Main = () => {
  const image = "./assets/img/banner-wide.jpeg";

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      //
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div>
      <img className="bannerimg" src={image} alt="wide banner" />
      <h2>Articles populaire</h2>
      {data.offers.map((offer) => {
        console.log(offer.product_name);
        return (
          <Link to="/home">
            <div>{offer.product_name}</div>;
          </Link>
        );
      })}
    </div>
  );
};

export default Main;
