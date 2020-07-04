import React, { useState } from "react";
import PropTypes from "prop-types";
import CheckoutForm from "./CheckoutForm";
import ThankYouPage from "../../pages/ThankYouPage";
import { connectToStore } from "../../hoc/ConnectHolder";
import { CART_IS_EMPTY, REQUEST_URL } from "../../Constants";

function Checkout(props) {
  const [submitForm, setSubmitForm] = React.useState(false);
  const [order, setOrder] = React.useState({});
  const [cartItems, setCartItems] = useState({});

  const getResponse = (data, cart) => {
    fetch(REQUEST_URL, {
      method: "POST",
      body: JSON.stringify({ data, cart, cartTotal: props.cartTotal }),
      mode: "cors",
    })
      .then((result) => result.json())
      .then((resp) => {
        if (resp && resp.order_number) {
          setSubmitForm(true);
          setOrder(resp);
          props.clearCart();
        }
      })
      .catch((e) => console.error(e));
  };

  const handleSubmitForm = async (data) => {
    if (!props.cartItems.size > 0) return alert(CART_IS_EMPTY);

    const cartitems = [...props.cartItems.values()].reduce((acc, value) => {
      let count = 1;
      if (acc[value.name]) count = acc[value.name].count + 1;
      return {
        ...acc,
        [value.name]: {
          count,
          price: value.price,
        },
      };
    }, {});
    setCartItems({ cartItems: cartitems, cartTotal: props.cartTotal, data });
    await getResponse(data, cartitems);
  };

  return submitForm ? (
    <ThankYouPage order={order} {...cartItems} />
  ) : (
    <CheckoutForm
      {...props}
      cartItems={props.cartItems}
      cartTotal={props.cartTotal}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

Checkout.propTypes = {
  cartItems: PropTypes.object,
  cartTotal: PropTypes.number,
  clearCart: PropTypes.func,
};

export default connectToStore(Checkout);
