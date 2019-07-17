import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import "./SignUp.css";
import { addUser } from "../actionCreators/signup";
class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  addUser = e => {
    e.preventDefault();
    const { firstName, lastName, email, password } = this.state;
    const user = {
      firstName,
      lastName,
      email,
      password
    };
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === ""
    ) {
      alert("Please enter all the details");
    } else {
      this.props.dispatch(addUser(user));
      alert("You have been registered successfully!!! Please log in");
    }
  };
  handleChange = name => e => {
    this.setState({ [name]: e.target.value });
  };
  render() {
    const { email, password, firstName, lastName } = this.state;
    const { signedUp } = this.props;

    return (
      <React.Fragment>
        {signedUp && <Redirect to="/login" />}
        <Header />
        <div className="signup-container">
          <h2>Sign Up</h2>
          <div className="name-container padding-right">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange("firstName")}
              required
            />
          </div>
          <div className="name-container">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange("lastName")}
            />
          </div>
          <label htmlFor="emailId">Email address</label>
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
            placeholder="Password"
            value={password}
            onChange={this.handleChange("password")}
            required
          />
          <br />
          <input
            type="submit"
            value="Signup"
            className="signup-button"
            onClick={this.addUser}
          />
          <br />
          <p className="login-link">
            Already have an account?. <Link to="/login">Login here</Link>
          </p>
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    signedUp: state.signUpState.signedUp
  };
};
export default connect(mapStateToProps)(SignUp);
