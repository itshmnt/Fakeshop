import { ActionTypes } from "../constants/action-types";

export const setProducts = (products) => {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
}

export const selectedProduct = (product) => {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: product,
}

// export const removeSelectedProduct = (product) => {
//     type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
//     payload: product,
// }