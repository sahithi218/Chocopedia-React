import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { Link } from "react-router-dom";
import { getUsers } from "../actionCreators/login";
import { connect } from "react-redux";

class Login extends React.Component {
  state = {
    email: "",
    password: ""
  };
  componentDidMount() {
    this.props.dispatch(getUsers());
  }

  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };

  handleLogin = () => {
    const { users } = this.props;
    const { email, password } = this.state;
    let isExists = users.find(
      user => user.email === email && user.password === password
    );
    if (email === "" && password === "") {
      alert("Please Enter Email Id and password");
    } else if (!isExists) {
      alert("Invalid Login details!!! Please sign up to Login");
    } else {
      this.props.history.push("/home");
    }
  };
  render() {
    const { email, password } = this.state;
    console.log(this.props.users);
    return (
      <React.Fragment>
        <Header />
        <div className="login-container">
          <h2>Login</h2>
          <label htmlFor="email">Email address</label>
          <br />
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={this.handleChange("email")}
            required
          />
          <br />
          <span>We will never share your email with anyone else</span>
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="password"
            value={password}
            placeholder="Password"
            onChange={this.handleChange("password")}
            required
          />
          <br />
          <input
            type="button"
            value="Login"
            className="login-button"
            onClick={this.handleLogin}
          />
          <br />
          <p className="signup-link">
            Don't have an account?. <Link to="/signup">Create One</Link>
          </p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.loginState.res
  };
};
export default connect(mapStateToProps)(Login);
