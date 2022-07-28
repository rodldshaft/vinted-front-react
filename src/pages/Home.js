import axios from "axios";

import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Main from "../components/Main";
import Head from "../components/head";
const Home = () => {
  return (
    <div className="page_home">
      {/* <Head /> */}
      <Header />
      <Main />
      {/* <Link to={`/Offer`}>Aller sa la page Offres</Link> */}
    </div>
  );
};

export default Home;
