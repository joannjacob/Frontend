import axios from "axios";
import { returnErrors } from "./messages";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  UPDATE_CART_QUANTITY,
  GET_CART
} from "./types";

const API_URL = "http://localhost:8000";

export const addToCart = product => {
  return {
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1,
      id: product.id
    }
  };
};

export const removeFromCart = productId => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      id: productId
    }
  };
};

export const updateCartQuantity = product => {
  return {
    type: UPDATE_CART_QUANTITY,
    payload: {
      product,
      quantity: 1,
      id: product.id
    }
  };
};

//GET CART
export const getCart = () => dispatch => {
  axios
    .get(API_URL + "/api/cart/")
    .then(res => {
      dispatch({
        type: GET_CART,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
