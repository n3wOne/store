import { categories } from "../data/mockData"
import { FILTER_ITEMS, LOAD_PRODUCT_DETAILS, LOAD_PRODUCT_DETAILS_SUCCESS } from "../action/actions"
export const LOAD_PRODUCT_LIST_SUCCESS = "LOAD_PRODUCT_LIST_SUCCESS"
export const LOAD_PRODUCT_LIST = "LOAD_PRODUCT_LIST"

const initialState = {
  products: [],
  categories,
  filterList: [],
  isLoading: true,
  productIsLoading: true
}

export function ProductReducer (state = initialState, action) {
  switch (action.type) {
    case LOAD_PRODUCT_LIST:
      return { ...state, productIsLoading: true }
    case LOAD_PRODUCT_LIST_SUCCESS:
      return { ...state, products: action.payload, productIsLoading: false }
    case FILTER_ITEMS:
      return { ...state, filterList: action.payload }
    case LOAD_PRODUCT_DETAILS:
      console.log("LOAD_PRODUCT_DETAILS")
      return { ...state, product_id: action.payload, isLoading: true }
    case LOAD_PRODUCT_DETAILS_SUCCESS:
      console.log("LOAD_PRODUCT_DETAILS_SUCCESS")
      return { ...state, product: action.payload, isLoading: false }
    default:
      return state
  }
}
