export const SET_PRODUCTS = "SET_PRODUCTS";
export const SET_SELECTED_PRODUCT = "SET_SELECTED_PRODUCT";
// 상품 리스트를 설정하는 액션 생성자
export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  payload: products,
});
// 선택된 상품을 설정하는 액션 생성자
export const setSelectedProduct = (product) => ({
  type: SET_SELECTED_PRODUCT,
  payload: product,
});
