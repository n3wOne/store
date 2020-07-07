import { categories, data2 as data } from "../data/mockData";
import {
  FILTER_ITEMS,
  LOAD_PRODUCT_DETAILS,
  LOAD_PRODUCT_DETAILS_SUCCESS,
  LOAD_PRODUCT_LIST_SUCCESS,
  LOAD_PRODUCT_LIST,
} from "../action/actions";

const initialState = {
  products: [],
  productsList: new Map([]),
  categories,
  filterList: [],
  isLoading: true,
  productIsLoading: true,
};

const loadProduct = (state, id) => {
  return { ...state, product: state.productsList.get(id) };
};

const productsToMap = (products) => {
  const productsList = new Map([]);
  products.forEach((product) => productsList.set(product.id, product));
  return productsList;
};

export function ProductReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT_LIST:
      return { ...state, productIsLoading: true };
    case LOAD_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        products: action.payload,
        productsList: productsToMap(action.payload),
        productIsLoading: false,
      };
    case FILTER_ITEMS:
      return { ...state, filterList: action.payload };
    case LOAD_PRODUCT_DETAILS:
      return loadProduct(state, action.payload);
    case LOAD_PRODUCT_DETAILS_SUCCESS:
      return { ...state, product: action.payload, isLoading: false };
    default:
      return state;
  }
}
