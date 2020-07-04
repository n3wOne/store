import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
// import Grid from "../Grid";
import TextField from "@material-ui/core/TextField";
import {
  CURRENCY,
  ORDER_SUMMARY,
  CheckOutForm,
  CheckoutText,
  CART_IS_EMPTY,
} from "../../Constants";

const CheckoutForm = (props) => {
  const {
    handleSubmitForm,
    removeProductFromCart,
    cartTotal,
    cartItems,
  } = props;

  const [inputData, handleChange] = useState({});
  const [agreement, handleAgreement] = useState(false);

  const submitDisabled = !cartItems.size > 0 || !agreement;

  const handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    handleChange({
      ...inputData,
      [name]: value,
    });
  };

  const validateForm = (event) => {
    event.preventDefault();
    handleSubmitForm(inputData);
  };

  const renderOrderSummary = () => {
    const prepareChildren = [...cartItems.values()].map((product) => {
      return (
        <li key={product.id} className="order-summary-li">
          <div className="order-summary-item">
            <span className="order-summary-item-name">{product.name}</span>
            <p className="order-summary-item-description">
              {product.description}
            </p>
          </div>
          <div className="order-summary-summ">X {product.count}</div>
          <div className="order-summary-item-total">
            {product.price * product.count} {CURRENCY}
          </div>
          <div
            className="order-summary-delete-item"
            onClick={() => removeProductFromCart(product.id)}
          >
            X
          </div>
        </li>
      );
    });

    return <ul className="order-summary-root">{prepareChildren}</ul>;
  };

  const renderCartTotal = () => {
    return (
      <div>
        {renderOrderSummary()}
        <div className="order-summary-root order-summary-total">
          <div className="order-summary-item">{CheckOutForm.total}</div>
          <p>
            {cartTotal} {CURRENCY}
          </p>
        </div>
      </div>
    );
  };

  return (
    <main className="checkout-form-main">
      <form method="post" onSubmit={(event) => validateForm(event)}>
        <div
          className="main-container-paper"
          style={{ padding: "20px", marginTop: "10px", marginBottom: "20px" }}
        >
          <h1 align="center">{CheckoutText.CHECKOUT}</h1>
          <input type="text" name="testname" />
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required={true}
                id="firstName"
                name="firstName"
                onChange={handleInputChange}
                label={CheckOutForm.name}
                fullWidth
                autoComplete="fname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required={true}
                id="lastName"
                name="lastName"
                onChange={handleInputChange}
                label={CheckOutForm.lastName}
                fullWidth
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="address"
                name="address"
                onChange={handleInputChange}
                label={CheckOutForm.address}
                fullWidth
                autoComplete="address"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="tel"
                name="tel"
                required={true}
                onChange={handleInputChange}
                label={CheckOutForm.tel}
                fullWidth
                autoComplete="tel"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                onChange={handleInputChange}
                label={CheckOutForm.email}
                fullWidth
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="comment"
                name="comment"
                onChange={handleInputChange}
                label={CheckOutForm.comment}
                fullWidth
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12}>
              <h2>{ORDER_SUMMARY}</h2>
              {cartItems.size > 0 ? (
                renderCartTotal()
              ) : (
                <div>{CART_IS_EMPTY}</div>
              )}
            </Grid>

            <Grid item xs={12} className="filter-item">
              <input
                required={true}
                checked={agreement}
                onChange={(event) => handleAgreement(event.target.checked)}
                type="checkbox"
                className="filter-item-checkbox"
                name="agreement"
              />
              <label className="filter-item-label" htmlFor="agreement">
                {CheckOutForm.agreement}
              </label>
            </Grid>
          </Grid>
          <div className="place-order">
            <button type="submit" disabled={submitDisabled}>
              {CheckoutText.PLACE_ORDER}
            </button>
          </div>
        </div>
      </form>
    </main>
  );
};

CheckOutForm.propTypes = {
  handleSubmitForm: PropTypes.func,
  cartItems: PropTypes.array,
  cartTotal: PropTypes.number,
  clearCart: PropTypes.func,
};

export default CheckoutForm;

CheckoutForm.propTypes = {
  cartItems: PropTypes.object,
  cartTotal: PropTypes.number,
  handleSubmitForm: PropTypes.func,
  removeProductFromCart: PropTypes.func,
};
