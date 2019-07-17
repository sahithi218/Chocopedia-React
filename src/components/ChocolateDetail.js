import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { getChocolatesById } from "../actionCreators/search";
import "./ChocolateDetail.css";
import Loader from "./Loader";

class ChocolateDetail extends React.Component {
  componentDidMount() {
    this.props.dispatch(getChocolatesById(this.props.match.params.id));
  }
  render() {
    const { chocolateDetail, isLoading } = this.props;
    return (
      <div>
        <NavBar />
        <Header />
        {isLoading && <Loader />}
        {!isLoading && (
          <div className="chocolateDetail-container">
            <h1 className="chocolate-name">{chocolateDetail.name}</h1>
            <p className="chocolate-desc">{chocolateDetail.desc}</p>
            <img src={chocolateDetail.image} alt={chocolateDetail.name} />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    chocolateDetail: state.chocDetails.chocolate,
    isLoading: state.chocDetails.isLoading
  };
};
export default connect(mapStateToProps)(ChocolateDetail);
