import { Link, useParams } from "react-router-dom";

import axios from "axios";
// import Home from "./pages/Home"

import { useState, useEffect } from "react";

const Offer = () => {
  const { offerId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchOffer = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${offerId}`
      );
      //
      setData(response.data);
      setIsLoading(false);
    };
    fetchOffer();
  }, []);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div>
      <Link to={`/home`}>revenir a la Page Home</Link>
      <h2>{data.product_name}</h2>
      {data.offers.map((offer, index) => {
        console.log(offer);
        return (
          <div className="" keys={index}>
            {/* <div>{offer.product_name}</div>
              <img src={offer.product_image.secure_url} alt="" /> */}
            <p>{offer.product_name}€</p>
            {/* <p>{offer.TAILLE}</p>
            <p>{offer.MARQUE}</p>
            <p>{offer.COULEUR}</p>
            <p>{offer.EMPLACEMENT}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default Offer;
