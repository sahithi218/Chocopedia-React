import React, { useEffect } from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getBrands } from "../actionCreators/brands";
import Header from "./Header";
import BrandsList from "./BrandsList";
import "./Brands.css";
import Loader from "./Loader";

const Brands = props => {
  const { dispatch } = props;
  useEffect(() => {
    dispatch(getBrands());
  }, [dispatch]);
  const handleBrand = id => {
    props.history.push(`/brands/${id}`);
  };
  return (
    <React.Fragment>
      <NavBar />
      <Header />
      {props.isLoading && <Loader />}
      {!props.isLoading && (
        <div className="brands-container">
          {props.brands.map(b => (
            <BrandsList brand={b} key={b.id} handleBrandDetail={handleBrand} />
          ))}
        </div>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    brands: state.brandsState.brands,
    isLoading: state.brandsState.isLoading
  };
};
export default connect(mapStateToProps)(Brands);
