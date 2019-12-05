import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import logo_white from './images/logo_white.svg';
import typo from './images/typo.png';
import QBlogo_white from './images/QBlogo_white.png';
import './App.css';
import Asset from './Asset';



class App extends Component {
    /*constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = '/assets';
    this.props.history.push(path);
  }*/

   render() { return (
   <Router>
      <div>
        <title>Login</title>
        <div className="main">
          <br /><br />
          <div className="topimage"><img className="location" src={logo_white} alt="location" />
            <br /><br />
            <img className="quickasset" src={typo} alt="quickasset" style={{width: '250px'}} />
          </div>
          <form method="post" action="index.html">
            <div className="username">
              <input type="text" id="username" placeholder="Username" name="username" required />
            </div>
            <hr className="line" style={{width: '20%'}} />
            <div className="password">
              <input type="password" id="password" placeholder="Password" name="password" required />
            </div>
          </form>
          <div className="login">
            <a href="/#" id="adminlogin" style={{color: '#ffffff', fontSize: '20px'}}>ADMIN LOGIN
            </a>
            <button type="submit" id="signin"><Link to='/assets'>SIGN IN</Link></button>
          </div>
          <div className="footer">
            ©
            {(new Date().getFullYear())}
            <img className="companylogo" src={QBlogo_white} alt="companylogo" style={{verticalAlign: 'sub'}} />
          </div>
        </div>
        <Switch>
          <Route exact path="/assets">
            <Asset />
          </Route>
        </Switch>


      </div>
      </Router>

      );
}
}

export default App;