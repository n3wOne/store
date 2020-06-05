import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Grid from "../Grid";
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from 'react-redux';
import { REMOVE_FROM_CART } from '../../action/actions';
import { CURRENCY } from '../../Constants';

const CheckOutForm = {
  name: 'Имя',
  lastName: 'Фамилия',
  address: 'Адрес',
  tel: 'Контактный телефон',
  email: 'email',
  total: 'Общая сумма заказа',
  agreement: 'Я даю согласие на обработку своих персональных данных',
};

const ORDER_SUMMARY = 'Ваш заказ: ';


const cartItems = [
  { name: 'goose', description: 'fresh goose', price: '750' },
  { name: 'Курица', description: 'Свежая курица', price: '500' },
  { name: 'Свининка', description: 'свежий свинина', price: '400' },
  { name: 'Сырок', description: 'вкусный сыр', price: '300' },
];

const CheckoutForm = (props) => {
  const orderSummary = () => {
    const { cart } = props.cart;
    const cartItems = [...new Set(cart)];
    // const cart = cartItems;
    const prepareChildren = cartItems.map((product) => {
      const itemsCount = cart.filter((cartItem) => cartItem.id === product.id).length;
      return (<li className="order-summary-li">
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
        <React.Fragment>
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

                <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox required color="secondary" name="agreement" value="yes" />}
                        label={CheckOutForm.agreement}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart,
});

export default connect(mapStateToProps)(CheckoutForm);
