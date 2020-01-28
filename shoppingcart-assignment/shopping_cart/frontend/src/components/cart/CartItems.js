import React, { Component } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./CartItems.css";
import PropTypes from "prop-types";
import { getProducts, deleteProduct } from "../../actions/products";
import { connect } from "react-redux";
import Counter from "../counter/Counter";

class CartItems extends Component {
  // state = {
  //   selected: 0
  // };
  static propTypes = {
    products: PropTypes.array.isRequired,
    getProducts: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getProducts();
  }

  // onSelect = key => {
  //   this.setState({ selected: key });
  // };

  render() {
    // const Arrow = ({ text, className }) => {
    //   return <div className={className}>{text}</div>;
    // };

    // const ArrowLeft = Arrow({ text: "<", className: "arrow-prev" });
    // const ArrowRight = Arrow({ text: ">", className: "arrow-next" });

    let quantity = 0;

    const Menu = list =>
      list.map(product => {
        let cartitemexists = cart.cartitems.some(
          item => item.id === product.id
        );

        if (cartitemexists) {
          quantity = cart.cartitems.find(item => item.id === product.id)
            .quantity;
        } else {
          quantity = 0;
        }
        return (
          <div className="card" key={product.id}>
            <div className="card-image">
              <img
                className="productimage"
                src={product.image}
                alt={product.name}
              />
              <div class="top-right">{quantity}</div>

              <span
                to="/"
                className="btn-floating halfway-fab waves-effect waves-light red"
                onClick={() => {
                  this.handleClick(product.id);
                }}
              ></span>
              <div className="counter">
                <Counter key={product.id} product={product} />
              </div>
            </div>
            <div className="card-content">
              <p>{product.name}</p>
              <p>
                <b>{product.cost}$</b>
              </p>
            </div>
          </div>
        );
      });

    const { cart } = this.props;
    console.log("inside the cart", cart.cartitems);
    // Create menu from items
    const menu = Menu(this.props.products);
    return (
      <div className="CartItem">
        <ScrollMenu
          data={menu}
          // arrowLeft={ArrowLeft}
          // arrowRight={ArrowRight}
          // selected={selected}
          onSelect={this.onSelect}
        />
      </div>
    );
  }
}
// export default CartItems;

const mapStateToProps = state => ({
  products: state.products.products,
  cart: state.cart
});

export default connect(mapStateToProps, { getProducts, deleteProduct })(
  CartItems
);
