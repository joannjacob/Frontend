import axios from "axios";
import { createMessage, returnErrors } from "./messages";

import {
  GET_PRODUCTS,
  DELETE_PRODUCT,
  ADD_PRODUCT,
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "./types";
const API_URL = "http://localhost:8000";

//GET PRODUCTS
export const getProducts = () => dispatch => {
  axios
    .get(API_URL + "/api/product/")
    .then(res => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//DELETE PRODUCT
export const deleteProduct = id => dispatch => {
  axios
    .delete(API_URL + "/api/product/${id}/")
    .then(res => {
      dispatch(createMessage({ deleteProduct: "Product Deleted" }));
      dispatch({
        type: DELETE_PRODUCT,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

//ADD PRODUCT
export const addProduct = product => dispatch => {
  axios
    .post(API_URL + "/api/product/", product)
    .then(res => {
      dispatch(createMessage({ addProduct: "Product Added" }));
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//ADD TO CART
export const addToCart = id => dispatch => {
  axios
    .get(API_URL + "/api/order/")
    .then(res => {
      dispatch({
        type: ADD_TO_CART,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

//REMOVE ITEM FROM CART
export const removeItem = id => dispatch => {
  axios
    .delete(API_URL + "/api/order/")
    .then(res => {
      dispatch({
        type: REMOVE_FROM_CART,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
