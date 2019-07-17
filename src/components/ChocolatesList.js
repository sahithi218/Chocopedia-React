import React from "react";
import { connect } from "react-redux";
import NavBar from "./NavBar";
import { getChocolates } from "../actionCreators/search";
import Header from "./Header";
import ChocolateListItem from "./ChocolatesListItem";
import "./chocolatesList.css";
import Loader from "./Loader";

class ChocolatesList extends React.Component {
  componentDidMount() {
    this.props.dispatch(getChocolates());
  }

  handleChocolate = id => {
    this.props.history.push(`/chocolates/${id}`);
  };
  render() {
    const { chocs, isLoading } = this.props;
    return (
      <React.Fragment>
        <NavBar />
        <Header />
        {isLoading && <Loader />}
        {!isLoading && (
          <div className="chocolates-container">
            {chocs.map(c => (
              <ChocolateListItem
                chocolateList={c}
                key={c.id}
                handleChocolateDetail={this.handleChocolate}
              />
            ))}
          </div>
        )}
      </React.Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {
    chocs: state.chocsState.chocs,
    isLoading: state.chocsState.isLoading
  };
};
export default connect(mapStateToProps)(ChocolatesList);
