export const ADD_ITEM = "./ADD_ITEM";
export const EMPTY_CART = "./EMPTY_CART";
export const REMOVE_ITEM = "./REMOVE_ITEM";

const add = (item) => ({
    type: ADD_ITEM,
    item,
  });

  const empty = () => ({
    type: EMPTY_CART,
});

const remove = (item) => ({
    type: REMOVE_ITEM,
    item
});


  export const addMenuItemToCart = (payload) => async (dispatch) => {
    const { itemName, label } = payload;
    dispatch(add({ label, itemName }));
  }

  export const emptyCart = () => async (dispatch) => {
    dispatch(empty());
}

export const removeItemFromCart = (payload) => async (dispatch) => {
    dispatch(remove(payload));
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
        case REMOVE_ITEM: {
            // filter on an array is probably ok,
            // because I doubt anyone is ordering 50,000 burgers
            let filteredArray = state.cart.filter(item => item !== action.item);
            return {
                ...state,
                cart: filteredArray,
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
