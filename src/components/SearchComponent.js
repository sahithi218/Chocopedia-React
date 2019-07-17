import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { connect } from "react-redux";
import { getChocolates } from "../actionCreators/search";
import ChocolateListItem from "./ChocolatesListItem";
import "./SearchComponent.css";
import Loader from "./Loader";

class SearchComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch(getChocolates());
  }
  handleChocolate = id => {
    this.props.history.push(`/chocolates/${id}`);
  };
  render() {
    const { searchedChocolates, isLoading } = this.props;

    return (
      <React.Fragment>
        <NavBar />
        <Header />
        <div className="search-container">
          {isLoading && <Loader />}
          {!isLoading && searchedChocolates.length > 0 ? (
            <div>
              {searchedChocolates.map(c => (
                <ChocolateListItem
                  chocolateList={c}
                  key={c.id}
                  handleChocolateDetail={this.handleChocolate}
                />
              ))}
            </div>
          ) : (
            <div className="no-data">No data Found</div>
          )}
        </div>

        <Footer />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    chocs: state.chocsState.chocs,
    searchedChocolates: state.chocsState.chocs.filter(
      item => item.name.toLowerCase().indexOf(state.chocsState.query) > -1
    ),
    isLoading: state.chocsState.isLoading
  };
}
export default connect(mapStateToProps)(SearchComponent);
