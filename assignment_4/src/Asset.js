import React from "react";
import "./Asset.css";
import iphone6 from "./images/iphone6.jpeg";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import Results from "./results";

class Asset extends React.Component {
  render() {
    const { onDetails, name, showResults, details } = this.props;

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
                  <tr id="iphone6" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      Funbook
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "iphone6" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="motog" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      MotoG
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "motog" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="ipod4" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      IPod 4th Gen
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "ipod4" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="iphone6plus" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      IPhone 6 Plus
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "iphone6plus" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="iphone5" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      IPhone 5
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "iphone5" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="ipadair" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      IPad Air
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "ipadair" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="ipad2" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      IPad 2
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "ipad2" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="oneplus6" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      OnePlus 6
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "oneplus6" ? (
                    <Results name={name} details={details} />
                  ) : null}
                  <tr id="oneplus7" onClick={onDetails}>
                    <td>
                      <img
                        className="phone_image"
                        src={iphone6}
                        alt="location"
                      />
                      One Plus 7
                    </td>
                    <td>Phone/iOS</td>
                    <td>iPh/006</td>
                    <td>vpk@qburst.com</td>
                  </tr>
                  {showResults && name === "oneplus7" ? (
                    <Results name={name} details={details} />
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

// export default Asset;

export default withRouter(Asset);
