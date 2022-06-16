export const ADD_ITEM = "./ADD_ITEM";
export const EMPTY_CART = "./EMPTY_CART";

const add = (item) => ({
    type: ADD_ITEM,
    item,
  });

  const empty = () => ({
    type: EMPTY_CART,
});


  export const addMenuItemToCart = (payload) => async (dispatch) => {
    const { itemName, label } = payload;
    dispatch(add({ label, itemName }));
  }


  export const emptyCart = () => async (dispatch) => {
    dispatch(empty());
}


  const initialState = {
    cart: [],
  };

  const cartReducer= (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM: {
          return {
            ...state,
            cart: [action.item, ...state.cart],
          }
        }
        case EMPTY_CART: {
            return {
                ...state,
                cart: [],
            }
        }
        default:
        return state;
    }
  }

  export default cartReducer;
