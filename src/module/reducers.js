import { SET_PRODUCTS, SET_SELECTED_PRODUCT } from "./actions";

const initialState = {
  products: [],
  selectedProduct: null,
};
// 상태를 업데이트하는 리듀서 함수
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.payload };
    case SET_SELECTED_PRODUCT:
      return { ...state, selectedProduct: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
