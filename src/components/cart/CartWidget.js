import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connectCartWidgetToStore } from "../../hoc/ConnectHolder";
import { CURRENCY, ROUTE_TO_CART } from "../../Constants";

const cart = (
  <svg
    className="cart-icon"
    focusable="false"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
  </svg>
);

function CartWidget(props) {
  const { total, cartItems } = props;
  return (
    <div className={"cart grid flex-center"} key={"cart-widget"}>
      <div className="gird-item">
        <Link to={ROUTE_TO_CART}>
          <button className={"cart-widget-button"}>
            {cart}
            {cartItems.size > 0 && (
              <span className="cart-badge">{cartItems.size}</span>
            )}
          </button>
          {total} {CURRENCY}
        </Link>
      </div>
    </div>
  );
}

export default connectCartWidgetToStore(CartWidget);

CartWidget.propTypes = {
  cartItems: PropTypes.object,
  total: PropTypes.number,
};
