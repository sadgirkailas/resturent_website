import React from "react";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import Image from "../Images/img1.jpg";
import '../styles/HomeStyle.css';


const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Image})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food in indea</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
