export const LOAD_MENU = "./LOAD_MENU";

const loadMenu = (menu) => ({
    type: LOAD_MENU,
    menu,
  });

  export const getMenu = async (dispatch) => {
      const response = await fetch('/menu.json');
      if (response.ok) {
        let menuToLoad = await response.json();
        dispatch(loadMenu(menuToLoad));
      }
  }

  const initialState = {
    menu: [],
  };

  const menuReducer= (state = initialState, action) => {
    switch (action.type) {
        case LOAD_MENU: {
          return {
            ...state,
            menu: action.menu,
          }
        }
        default:
        return state;
    }
  }

  export default menuReducer;
