import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import { CheckoutText } from '../../Constants';

const steps = ['Checkout'];


const getResponse = () => {
  fetch('http://vk.ferma-ivanovka.ru/fetchquery.php',
    {
      method: 'POST',
      body: JSON.stringify({ name: 'helloUser', u: 111 }),
      mode: 'cors',
    }).then((result) => {
    console.log(result);
    return result.text();
  })
    .then((data) => console.log(data));
};

function Checkout(props) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = async () => {
    await getResponse();
    setActiveStep(activeStep + 1);
  };

  return (

            <main className="checkout-form-main">
                <div className="main-container-paper" style={{ padding: '20px', marginTop: '10px', marginBottom: '20px' }}>
                        {activeStep === steps.length ? (
                            <>
                                <h2>
                                    {CheckoutText.THANKS}
                                </h2>
                                <p className="text">
                                    {CheckoutText.THANKS_TEXT}
                                </p>
                            </>
                        ) : (
                            <>
                                <h1 align="center">
                                    {CheckoutText.CHECKOUT}
                                </h1>
                                {<CheckoutForm />}
                                <div className="place-order">
                                    <button
                                        onClick={handleNext}
                                    >
                                        {CheckoutText.PLACE_ORDER}
                                    </button>
                                </div>
                            </>
                        )}
                </div>
            </main>
  );
}

const mapStateToProps = ({
  products, cart, cartTotal, isLoading,
}) => ({
  isLoading: products.productIsLoading,
  products,
  cart: cart.cart,
  cartTotal: cart.cartTotal,
});

export default connect(mapStateToProps)(Checkout);
