export const ADD_ITEM = "./ADD_ITEM";

const add = (item) => ({
    type: ADD_ITEM,
    item,
  });


  export const addMenuItemToCart = (payload) => async (dispatch) => {
    const { itemName, label } = payload;
    dispatch(add({ label, itemName }));
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
        default:
        return state;
    }
  }

  export default cartReducer;
