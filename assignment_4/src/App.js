import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import logo_white from "./images/logo_white.svg";
import typo from "./images/typo.png";
import QBlogo_white from "./images/QBlogo_white.png";
import "./App.css";
import Asset from "./Asset";
import history from "./history";
import PropTypes from "prop-types";

class App extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      showResults: false,
      name: null,
      details: {
        iphone6: {
          id: "Funbook",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        motog: {
          id: "Moto G",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        ipod4: {
          id: "IPod 4th Gen",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        iphone6plus: {
          id: "IPhone 6 Plus",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        iphone5: {
          id: "IPhone 5",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        ipadair: {
          id: "IPad Air",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        ipad2: {
          id: "IPad 2",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        oneplus6: {
          id: "OnePlus 6",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        },
        oneplus7: {
          id: "One Plus 7",
          type: "Phone/iOS",
          model_number: "iPh/006",
          description: "some content"
        }
      }
    };
    this.routeChange = this.routeChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  routeChange() {
    let path = `/assets`;
    this.props.history.push(path);
  }

  handleClick = event => {
    console.log(event.currentTarget.id);
    this.setState(prevState => ({ showResults: !prevState.showResults }));
    this.setState({ name: event.currentTarget.id });
    console.log("App", this.state);
  };

  render() {
    return (
      <Router>
        <div>
          <title>Login</title>
          <div className="main">
            <br />
            <br />
            <div className="topimage">
              <img className="location" src={logo_white} alt="location" />
              <br />
              <br />
              <img
                className="quickasset"
                src={typo}
                alt="quickasset"
                style={{ width: "250px" }}
              />
            </div>
            <form method="post" action="index.html">
              <div className="username">
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  name="username"
                  required
                />
              </div>
              <hr className="line" style={{ width: "20%" }} />
              <div className="password">
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  name="password"
                  required
                />
              </div>
            </form>
            <div className="login">
              <a
                href="/#"
                id="adminlogin"
                style={{ color: "#ffffff", fontSize: "20px" }}
              >
                ADMIN LOGIN
              </a>
              <button type="submit" id="signin">
                <Link to="/assets">SIGN IN</Link>
              </button>
            </div>
            <div className="footer">
              ©{new Date().getFullYear()}
              <img
                className="companylogo"
                src={QBlogo_white}
                alt="companylogo"
                style={{ verticalAlign: "sub" }}
              />
            </div>
          </div>
          <Switch>
            <Route exact path="/assets" component={Asset}>
              <Asset
                id={this.state.id}
                name={this.state.name}
                details={this.state.details}
                showResults={this.state.showResults}
                onDetails={this.handleClick}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
