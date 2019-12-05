import React from 'react';
import './Asset.css';
import iphone6 from './images/iphone6.jpeg'
import {
  BrowserRouter as Router,
} from "react-router-dom";

class Results extends React.Component{
    render() {
    console.log(this.props.id);
     if (this.props.id === "iphone6"){

     console.log("IPHONE6 DETAILS");

        return (
                <tr id="hide_this">
                <td><img className="phone_detail_image" src={iphone6} alt="location" /></td>
                <td>
                <tr>Funbook</tr>
                <tr>Type:Phone/iOS</tr>
                <tr>iPh/006</tr>
                <tr>Just some content</tr>
                </td>
                <td>
                <input type="text" placeholder="Assign To" />
                </td>
                <td>
                <tr><button type="submit" id="assign" style={{}}>ASSIGN</button></tr>
                <tr><button type="submit" id="assign_to_me" style={{}}>ASSIGN TO ME</button></tr>
                <tr><button type="submit" id="request_release" style={{}}>REQUEST RELEASE</button></tr>
                </td>
              </tr>
          );
    }
    else if (this.props.id === "motog"){

     console.log("MOTOG DETAILS");

        return (
                <tr id="hide_this">
                <td><img className="phone_detail_image" src={iphone6} alt="location" /></td>
                <td>
                <tr>Funbook</tr>
                <tr>Type:Phone/iOS</tr>
                <tr>iPh/006</tr>
                <tr>Just some content</tr>
                </td>
                <td>
                <input type="text" placeholder="Assign To" />
                </td>
                <td>
                <tr><button type="submit" id="assign" style={{}}>ASSIGN</button></tr>
                <tr><button type="submit" id="assign_to_me" style={{}}>ASSIGN TO ME</button></tr>
                <tr><button type="submit" id="request_release" style={{}}>REQUEST RELEASE</button></tr>
                </td>
              </tr>
          );
    }
    else {
                console.log("NOTHING");
                return (
                            <tr id="hide_this">
              </tr>
        );
    }
    }
}

class Asset extends React.Component {

    constructor(props) {
        super(props);
            this.state = {
              showResults: false,
              id: "iphone6",
            };
            this.delta = this.delta.bind(this);
        }

        delta(event) {
            console.log(event.currentTarget.id);
            this.setState(prevState => ({showResults: !prevState.showResults}));
            this.setState({id: event.currentTarget.id});
            console.log(this.state);
        }





    render() {
      return (
      <Router>
        <div className="App">
        <div className="container">
        <div className="header">
            <div className="header-left">
                <text id="asset_name">ASSET IN MY NAME &nbsp;| &nbsp;</text>
                <text id="asset_list">ASSET LIST</text>
            </div>
            <div className="header-right">
                <div className="search-container">
                    <form>
                        <i className="fa fa-search"></i>
                        <input type="text" placeholder="Search" id="search"></input>
                    </form>
                </div>
                <text>Joann</text>
                <i className="fa fa-sign-out"></i>
            </div>
        </div>
        <div className="content">
        <table cellSpacing={0} cellPadding={0}>
        <tbody>
      <tr>
        <th>Asset Name</th>
        <th>Asset Type</th>
        <th>Asset Code</th>
        <th>User</th>
      </tr>
      <tr id="iphone6" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
     { this.state.showResults ? <Results /> : null }
      <tr id="motog" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="ipod4" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="iphone6plus" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="iphone5" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="ipadair" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="ipad2" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="oneplus6" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      <tr id="oneplus7" onClick={this.delta}>
        <td><img className="phone_image" src={iphone6} alt="location" />Funbook</td>
        <td>Phone/iOS</td>
        <td>iPh/006</td>
        <td>vpk@qburst.com</td>
      </tr>
      { this.state.showResults ? <Results /> : null }
      </tbody>
    </table>
        </div>
    </div>
    </div>
    </Router>
      );
      }
}

export default Asset;
