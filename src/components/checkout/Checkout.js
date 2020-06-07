import React from "react";
import { connect } from "react-redux";
import CheckoutForm from "./CheckoutForm";
import { connectToStore } from "../../hoc/ConnectHolder";
import { CheckoutText } from "../../Constants";

const thanks = (order) => (
  <>
    <h2 align="center">{CheckoutText.THANKS}</h2>
    <h3 align="center">
      Заказ №{order.order_number} от {order.date}
    </h3>
    <p className="text">{CheckoutText.THANKS_TEXT}</p>
  </>
);

function Checkout(props) {
  const [submitForm, setSubmitForm] = React.useState(false);
  const [order, setOrder] = React.useState({});

  const getResponse = (data, cart) => {
    fetch("http://vk.ferma-ivanovka.ru/fetchquery.php", {
      method: "POST",
      body: JSON.stringify({ data, cart }),
      mode: "cors",
    })
      .then((result) => result.json())
      .then((resp) => {
        if (resp && resp.order_number) {
          setSubmitForm(true);
          setOrder(resp);
          props.clearCart();
        } else {
          alert("Что-то пошло не так(");
        }
      });
  };

  const handleSubmitForm = async (data) => {
    if (!props.cart.length > 0) return alert(CART_IS_EMPTY);

    const cartitems = props.cart.reduce((acc, value) => {
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

    await getResponse(data, cartitems);
  };

  return submitForm ? (
    thanks(order)
  ) : (
    <CheckoutForm
      {...props}
      cart={props.cart}
      cartTotal={props.cartTotal}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export default connectToStore(Checkout);
