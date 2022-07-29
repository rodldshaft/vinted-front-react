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
          // console.log(
          //   offer.owner.account.username !== "false"
          //     ? ` =true ${offer.owner._id} ${offer.owner.account.username}`
          //     : "=false"
          // );
          //62cc3b5ac2527d1e1b5445b7  + ${offer._id}
          // console.log(offer._id);
          return (
            <Link to={`/offer/${offer._id}`}>
              <div className="thumbnails" keys={index}>
                {/* <div>{offer.owner.account.username} </div> */}
                {/* {offer.map((owner, index) => {
                return <div keys={index}>{owner._id} </div>;
              })} */}
                {offer.owner.account.username === true ? (
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
