import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

const Offer = () => {
  const { offerId } = useParams();
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  console.log("offerid : " + offerId);
  useEffect(() => {
    const fetchOffer = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${offerId}`
      );

      setData(response.data);

      setIsLoading(false);
      console.log(response.data);
    };
    fetchOffer();
  }, [offerId]);

  return isLoading === true ? (
    <h1>En cours de chargement</h1>
  ) : (
    <div>
      <Header />
      <div className="offer">
        {/* <Link to={`/home`}>revenir a la Page Home</Link> */}
        <img src={data.product_image.secure_url} alt="" />
        <div className="offer_rigth">
          <p>{data.product_price} €</p>

          <div className="tableau">
            <div>
              <p>MARQUE</p>
              <p> {data.product_details[0].MARQUE}</p>
            </div>
            <div>
              <p className="tb_detail">ÉTAT </p>
              <p> {data.product_details[1].ÉTAT}</p>
            </div>
            <div>
              <p>COULEUR </p>
              <p> {data.product_details[2].COULEUR}</p>
            </div>
            <div>
              <p>EMPLACEMENT </p>
              <p> {data.product_details[3].EMPLACEMENT}</p>
            </div>
          </div>
          <div>
            <h2>{data.product_name}</h2>
            <p>{data.product_description}</p>
            <div></div>
            <div>
              {data.owner.account.secure_url} {data.owner.account.username}
            </div>
          </div>
        </div>

        {/* {data.offers.map((offer, index) => {
        console.log(offer);
        return (
          <div keys={index}>
            <p>{offer.product_name}€</p>
          </div>
        );
      })} */}
      </div>
    </div>
  );
};

export default Offer;
