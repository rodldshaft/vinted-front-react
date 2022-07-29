/* eslint-disable valid-typeof */
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
          return (
            // <Link to="/home">
            <div className="thumbnails" keys={index}>
              {/* <div>{offer.owner.account.username} </div> */}
              {/* {offer.map((owner, index) => {
                return <div keys={index}>{owner._id} </div>;
              })} */}

              <div>{offer.product_name}</div>
              <img src={offer.product_image.secure_url} alt="" />
              <p>{offer.product_price}€</p>

              <p className="bleu">{offer.product_details.TAILLE}</p>
              <p className="red">{offer.product_details.MARQUE}</p>
            </div>

            // </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Main;
