import React, { useState } from "react";
// import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
// import Grid from "../Grid";
// import TextField from "@material-ui/core/TextField";
import TextField from "../helpers/TextField";
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
  const [formIsValid, handleFormValidation] = useState(false);

  const submitDisabled = !cartItems.size > 0 || !agreement;

  const handleInputChange = (event) => {
    const { target } = event;
    const { value, name } = target;
    handleChange({
      ...inputData,
      [name]: value,
    });
  };

  const handleFormChange = (e) => {
    handleFormValidation(e.currentTarget.checkValidity());
  };

  const validateForm = (event) => {
    event.preventDefault();
    formIsValid && handleSubmitForm(inputData);
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
      <form onChange={handleFormChange} method="post" onSubmit={validateForm}>
        <div
          className="main-container-paper"
          style={{ padding: "20px", marginTop: "10px", marginBottom: "20px" }}
        >
          <h1 align="center">{CheckoutText.CHECKOUT}</h1>
          <div className={"grid spacing-3"}>
            <div className={"col-desk-6 col-mob-4"}>
              <TextField
                required={true}
                id="firstName"
                name="firstName"
                pattern={".{3,}"}
                title={CheckOutForm.validation.name}
                onChange={handleInputChange}
                label={CheckOutForm.name}
                fullWidth
                autoComplete="fname"
              />
            </div>
            <div className={"col-desk-6 col-mob-4"}>
              <TextField
                id="lastName"
                name="lastName"
                onChange={handleInputChange}
                label={CheckOutForm.lastName}
                fullWidth
                autoComplete="lname"
              />
            </div>
            <div className={"col-desk-12"}>
              <TextField
                id="address"
                name="address"
                onChange={handleInputChange}
                label={CheckOutForm.address}
                fullWidth
                autoComplete="address"
              />
            </div>
            <div className={"col-desk-12"}>
              <TextField
                id="phone"
                name="phone"
                required={true}
                onChange={handleInputChange}
                label={CheckOutForm.phone}
                title={CheckOutForm.validation.phone}
                fullWidth
                pattern={".{6,}"}
                autoComplete="phone"
              />
            </div>
            <div className={"col-desk-12"}>
              <TextField
                id="email"
                name="email"
                onChange={handleInputChange}
                label={CheckOutForm.email}
                fullWidth
                autoComplete="email"
              />
            </div>
            <div className={"col-desk-12"}>
              <TextField
                id="comment"
                name="comment"
                onChange={handleInputChange}
                label={CheckOutForm.comment}
                fullWidth
                autoComplete="email"
              />
            </div>

            <div className={"col-desk-12"}>
              <h2>{ORDER_SUMMARY}</h2>
              {cartItems.size > 0 ? (
                renderCartTotal()
              ) : (
                <div>{CART_IS_EMPTY}</div>
              )}
            </div>

            <div className={"col-desk-12 filter-item"}>
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
            </div>
          </div>
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
