import React from 'react';
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
    }).then((result) => result.text())
    .then((data) => console.log(data));
};

const thanks = () => <>
    <h2>
        {CheckoutText.THANKS}
    </h2>
    <p className="text">
        {CheckoutText.THANKS_TEXT}
    </p>
</>;

function Checkout(props) {
  const [submitForm, setSubmitForm] = React.useState(false);

  const handleSubmitForm = async () => {
    if (!props.cart.length > 0) return alert('Корзина пуста!');
    await getResponse();
    setSubmitForm(true);
  };

  return (
    submitForm ? (
      thanks()
    ) : <CheckoutForm cart={props.cart} cartTotal={props.cartTotal} handleSubmitForm={handleSubmitForm} />
  );
}

const mapStateToProps = ({
  products, cart,
}) => ({
  isLoading: products.productIsLoading,
  products,
  cart: cart.cart,
  cartTotal: cart.cartTotal,
});

export default connect(mapStateToProps)(Checkout);
