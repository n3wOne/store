import React from "react";
import PropTypes from "prop-types";
import { CheckoutText, CURRENCY } from "../../Constants";

const ThankYouPage = (props) => {
  const { order, cartItems, cartTotal, data } = props;
  const renderCartItems = () => {
    return (
      <ul>
        {Object.entries(cartItems).map(([key, value]) => (
          <li key={key}>
            {key} x {value.count} = {value.count * value.price} {CURRENCY}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="order-success">
      <h2 align="center">{CheckoutText.THANKS}</h2>
      <h3 align="center">
        Заказ №{order.order_number} от {order.date} на сумму {cartTotal}{" "}
        {CURRENCY}
      </h3>
      <p className="text">{CheckoutText.THANKS_TEXT}</p>
      <div className="text">
        Вы заказали: {renderCartItems()}
        <p>
          Общая сумма: {cartTotal} {CURRENCY}
        </p>
      </div>
      <div className="text">
        <p>
          Ваш контактный телефон: {data.phone}
          <br />
          <span className="order-warning">
            Внимание! Если Вы указали некорректный телефон, мы не сможем с Вами
            связаться!
          </span>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;

ThankYouPage.propTypes = {
  order: PropTypes.object,
  cartItems: PropTypes.object,
  cartTotal: PropTypes.number,
  data: PropTypes.object,
};
