import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import "./BrandDetail.css";
import { getBrandById } from "../actionCreators/brands";
import Loader from "./Loader";
import NavBar from "./NavBar";

const BrandDetail = props => {
  const { match, dispatch, brand, isLoading } = props;
  useEffect(() => {
    dispatch(getBrandById(match.params.id));
  }, [dispatch, match]);
  return (
    <div>
      <NavBar />
      <Header />
      {isLoading && <Loader />}
      {!props.isLoading && (
        <div className="brandDetail-container">
          {props.brand.length > 0 &&
            props.brand.map(b => (
              <div className="brand-item">
                <div className="brand-body">
                  <img src={b.image} alt={b.name} />
                </div>
                <h1 className="brand-name">{b.name}</h1>
              </div>
            ))}
          {props.brand.length == 0 && (
            <div className="no-chocolates">No Chocolates Found</div>
          )}
        </div>
      )}
      <Footer />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    brand: state.brandDetails.brand,
    isLoading: state.brandDetails.isLoading
  };
};
export default connect(mapStateToProps)(BrandDetail);
