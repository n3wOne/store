import { connect } from "react-redux";
import {
    ADD_TO_CART,
    DECREASE_CART_ITEM,
    FILTER_ITEMS,
    LOAD_PRODUCT_DETAILS,
    LOAD_PRODUCT_DETAILS_SUCCESS,
    REMOVE_FROM_CART
} from "../action/actions";


const mapStateToProps = (state, props) => {
    const { cart, cartTotal } = state.cart;
    const { products } = state.products;
    return {
        cart,
        products,
        cartTotal,
        ...props
    }
};

const mapFilterStateToProps = (state, props) =>{
    const { categories, filterList } = state.products;
    return {
        categories,
        filterList
    }
};

const mapCartState = state =>{
  const {cart, cartTotal} = state.cart;
  return {
      total: cartTotal,
      count: cart.length
  }
};


const mapProductDetailsToProps = (state, props) =>{
    const { isLoading, product, product_id } = state.products;
    console.log(state,props);
    return {
        product,
        product_id,
        isLoading,
    }
};

const mapFilterDispatchToProps = dispatch =>({
    filterItems: payload => dispatch({
        type: FILTER_ITEMS,
        payload
    })
});

function loadprod(payload) {
    return dispatch => {

        // dispatch({
        //     type: LOAD_PRODUCT_DETAILS,
        //     payload
        // });

        setTimeout(()=>{
            dispatch({
                type: LOAD_PRODUCT_DETAILS_SUCCESS,
                payload: {
                    "id": 2,
                    "name": "product2",
                    "description": "product 2 description",
                    "price": 200,
                    "category": "cat2"
                }
            })
        }, 1000)

}
}

const mapProductDispatchToProps = dispatch =>({
    loadProductDetails: payload => dispatch(loadprod(payload))
});

export const loadDetails = payload =>({
    type: LOAD_PRODUCT_DETAILS,
    payload
});



const mapDispatchToProps = dispatch =>({
    addToCart: payload => dispatch({
            type: ADD_TO_CART,
            payload
        }),
    removeFromCart: payload => dispatch({
        type: REMOVE_FROM_CART,
        payload
    }),
    decreaseItem: payload => dispatch({
        type: DECREASE_CART_ITEM,
        payload
    })
});

export const connectCartToStore = WrappedComponent => connect(
    (state, props) => mapStateToProps(state, props),
    mapDispatchToProps
)(WrappedComponent);

export const connectCartWidgetToStore = CartWidget => connect(
    state => mapCartState(state)
)(CartWidget);

export const connectFilterToStore = WrappedComponent => connect(
    (state, props) => mapFilterStateToProps(state,props),
    mapFilterDispatchToProps
)(WrappedComponent);

export const connectProductDetailsToStore = WrappedComponent => connect(
    (state, props) => mapProductDetailsToProps(state, props),
    // null,
    mapProductDispatchToProps
)(WrappedComponent);