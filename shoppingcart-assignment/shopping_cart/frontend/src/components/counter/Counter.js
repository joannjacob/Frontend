import React, { Component } from "react";
import { increment, decrement } from "../../actions/counters";
import {
  addToCart,
  removeFromCart,
  updateCartQuantity
} from "../../actions/cartItems";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Counter extends Component {
  static propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    updateCartQuantity: PropTypes.func.isRequired
  };

  onincrement = id => {
    this.props.increment(this.props.product.id);
    this.props.addToCart(this.props.product);
  };
  ondecrement = id => {
    this.props.decrement(this.props.product.id);
    this.props.updateCartQuantity(this.props.product);
  };

  removeFromCart = id => {
    this.props.removeFromCart(this.props.product.id);
  };

  render() {
    // const { product, cart } = this.props;

    // let quantity = "";
    // const index = counters.items.findIndex(x => x.id === product.id);
    // if (counters.items.length > 0 && index !== -1) {
    //   quantity = counters.items[index].count;
    // } else {
    //   quantity = 0;
    // }

    // let cartitemexists = cart.cartitems.some(item => item.id === product.id);

    // if (cartitemexists) {
    //   quantity = cart.cartitems.find(item => item.id === product.id).quantity;
    // } else {
    //   quantity = 0;
    // }

    return (
      <div className="productcounter">
        <div className="btn-group">
          <button onClick={this.onincrement}>
            <i className="fa fa-plus" style={{ fontSize: 25 }} />
          </button>
          <button onClick={this.ondecrement}>
            <i className="fa fa-minus" style={{ fontSize: 25 }} />
          </button>
          <button onClick={this.removeFromCart}>
            <i className="fa fa-close" style={{ fontSize: 25 }} />
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    counters: state.counters,
    cart: state.cart
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increment: id => dispatch(increment(id)),
    decrement: id => dispatch(decrement(id)),
    addToCart: id => dispatch(addToCart(id)),
    removeFromCart: id => dispatch(removeFromCart(id)),
    updateCartQuantity: id => dispatch(updateCartQuantity(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
