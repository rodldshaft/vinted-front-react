import { Link } from "react-router-dom";
import axios from "axios";
// import Home from "./pages/Home"
import bandeau from "../assets/img/banner-wide.jpeg";
import { useState, useEffect } from "react";

const Main = () => {
  // const image = "./assets/img/banner-wide.jpeg";

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      //6196659305212ce3cc03e07d null
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div className="main">
      <div>
        <img className="bannerimg" src={bandeau} alt="wide banner" />
        <h2>Articles populaire</h2>
      </div>
      <nav className="nav">
        {data.offers.map((offer, index) => {
          return (
            <Link keys={index} to={`/offer/${offer._id}`}>
              <div className="thumbnails" keys={index}>
                {offer.owner ? (
                  <div>{offer.owner.account.username} </div>
                ) : (
                  <div> </div>
                )}
                <div>{offer.product_name}</div>
                <img src={offer.product_image.secure_url} alt="" />
                <p>{offer.product_price}€</p>
                <p>{offer.product_details[1].TAILLE}</p>
                <p>{offer.product_details[0].MARQUE}</p>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Main;
