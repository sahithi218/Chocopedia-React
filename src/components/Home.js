import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "./Home.css";
import { Link } from "react-router-dom";
import Header from "./Header";

const Home = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      <div className="home-container">
        <h4 className="textDiv">
          Chocolate collection is a crowd sourced portal which gives you details
          about world reowned brands and chocolates
        </h4>
        <div className="signUpDiv">
          Please{" "}
          <span>
            <Link to="/signup">Sign up</Link>
          </span>
          , to contribute. Happy chocolating :-){" "}
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
