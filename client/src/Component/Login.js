import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../store/actions/usersAction";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button } from "reactstrap";
class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  handelChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handelSubmit = (e) => {
    e.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      return alert("you need to fill both field");
    } else {
      const userData = {
        email: this.state.email,
        password: this.state.password,
      };
      console.log(userData);
      this.props.login(userData);
    }
  };
  render() {
    console.log("this.props :", this.props);
    return (
      <div className="container">
        {/* i didint understand this part   ////////////////////////// */}
        {this.props.user.isLoggedin ? (
          <p>{this.props.user.token}</p>
        ) : (
          // <p>{this.props.users}</p>
          <form className="form-horizontal" onSubmit={this.handelSubmit}>
            <div className="form-group">
              <label
                htmlFor="inputEmail3"
                className="col-sm-2 control-label"
              ></label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  onChange={this.handelChange}
                />
              </div>
            </div>
            <div className="form-group">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 control-label"
              ></label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                  onChange={this.handelChange}
                />
              </div>
            </div>
            <div className="form-group row">
              <div className="col-sm-offset-2 col-sm-10 align-items-center">
                <button>Sign in</button>
              </div>
            </div>
          </form>
        )}
        <div className="col-sm-offset-2 col-sm-10 align-items-center">
          <Button href="http://localhost:5000/api/users/auth/google">
            <FontAwesomeIcon icon={faGoogle} className="mr-2 " />
            Sign In With Google
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("mapToState", state);
  return {
    user: state.users,
  };
};
const mapDispatchToProps = (dispatch) => ({
  login: (userData) => dispatch(login(userData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
