import { ADD_PRODUCT } from '../actions';

const INITIAL_STATE = {
  shoppingCart: [],
  totalValue: 0,
};

const updateCart = (shoppingCart, payload) => {
  const filteredCart = shoppingCart
    .filter((item) => item.productId !== payload.productId)
    .filter((item) => item.quantity > 0);
  return [...filteredCart, payload];
};

const shoppingCart = (state = INITIAL_STATE, action) => {
  const updatedCart = updateCart(state.shoppingCart, action.payload);
  const totalValue = updatedCart.reduce((acc, curr) => acc + Number(curr?.subTotal), 0);
  switch (action.type) {
  case ADD_PRODUCT:
    return {
      shoppingCart: updatedCart,
      totalValue,
    };
  default:
    return state;
  }
};

export default shoppingCart;
