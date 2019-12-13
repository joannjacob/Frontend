import React from "react";
import iphone6 from "./images/iphone6.jpeg";

class Results extends React.Component {
  render() {
    return (
      <tr id="hide_this">
        <td>
          <img className="phone_detail_image" src={iphone6} alt="location" />
        </td>
        <td>
          <tr>{this.props.details[this.props.name].id}</tr>
          <tr>Type: {this.props.details[this.props.name].type}</tr>
          <tr>Code: {this.props.details[this.props.name].model_number}</tr>
          <tr>{this.props.details[this.props.name].description}</tr>
        </td>
        <td>
          <input type="text" placeholder="Assign To" />
        </td>
        <td>
          <tr>
            <button type="submit" id="assign" style={{}}>
              ASSIGN
            </button>
          </tr>
          <tr>
            <button type="submit" id="assign_to_me" style={{}}>
              ASSIGN TO ME
            </button>
          </tr>
          <tr>
            <button type="submit" id="request_release" style={{}}>
              REQUEST RELEASE
            </button>
          </tr>
        </td>
      </tr>
    );
  }
}

export default Results;
