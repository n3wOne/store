import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Grid from "../Grid";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { REMOVE_FROM_CART } from '../../action/actions';
import {
  CURRENCY, ORDER_SUMMARY, CheckOutForm, CheckoutText,
} from '../../Constants';


const CheckoutForm = (props) => {
  const orderSummary = () => {
    const { cart } = props;
    const cartItems = [...new Set(cart)];
    const prepareChildren = cartItems.map((product) => {
      const itemsCount = cart.filter((cartItem) => cartItem.id === product.id).length;
      return (<li key={product.id} className="order-summary-li">
                <div className="order-summary-item"><span
                    className="order-summary-item-name">{product.name}</span>
                    <p className="order-summary-item-description">{product.description}</p>
                </div>
                <div className="order-summary-summ">X {itemsCount}</div>
                <div className="order-summary-item-total">{product.price * itemsCount} {CURRENCY}</div>
                <div className="order-summary-delete-item" onClick={() => props.dispatch({ type: REMOVE_FROM_CART, payload: product })}>X</div></li>);
    });

    return <ul className="order-summary-root">{prepareChildren}</ul>;
  };

  return (
       <main className="checkout-form-main">
           <div className="main-container-paper" style={{ padding: '20px', marginTop: '10px', marginBottom: '20px' }}>
            <h1 align="center">
                {CheckoutText.CHECKOUT}
            </h1>
             <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label={CheckOutForm.name}
                        fullWidth
                        autoComplete="fname"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label={CheckOutForm.lastName}
                        fullWidth
                        autoComplete="lname"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="address"
                        name="address"
                        label={CheckOutForm.address}
                        fullWidth
                        autoComplete="address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="tel"
                        name="tel"
                        label={CheckOutForm.tel}
                        fullWidth
                        autoComplete="tel"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="email"
                        name="email"
                        label={CheckOutForm.email}
                        fullWidth
                        autoComplete="email"
                    />
                </Grid>

                <Grid item xs={12}>
                    <h2>{ORDER_SUMMARY}</h2>
                        {orderSummary()}
                    <div className="order-summary-root order-summary-total">
                    <div className="order-summary-item">{CheckOutForm.total}</div>
                            <p>
                                {props.cart.cartTotal} {CURRENCY}
                            </p>
                    </div>
                </Grid>

                <Grid item xs={12} className="filter-item">
                    <input required type="checkbox" className="filter-item-checkbox" name="agreement" />
                    <label className="filter-item-label" htmlFor="agreement">{CheckOutForm.agreement}</label>
                </Grid>
            </Grid>
            <div className="place-order">
                <button
                    onClick={props.handleSubmitForm}
                >
                    {CheckoutText.PLACE_ORDER}
                </button>
            </div>
           </div>
       </main>
  );
};

export default CheckoutForm;
