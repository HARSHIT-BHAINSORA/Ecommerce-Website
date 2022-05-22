import React, { useEffect } from "react";
import CheckoutProduct from "./CheckoutProduct";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import { Link ,useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from './axios';

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();
  
  const stripe = useStripe();
  const elements = useElements();
  
  const [processing, setProcessing] = useState("");
  const [succeeded, setSucceeded] = useState(false);
  
  const [error, setError] = useState(null);
  const [disabled, SetDisabled] = useState(true);
  const [clientSecret ,setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () =>{
      const response = await axios({
        method : 'post',
        url : `/payments/create?total= ${getBasketTotal(basket) * 100}` 
      });
      setClientSecret(response.data.clientSecret)
    }

    getClientSecret();
  } , [basket])


  const handleSubmit = async(event) => {
    event.preventDefault();
    setProcessing(true);

    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method :{
        card : elements.getElement(CardElement)
      }
    }).then(({paymentIntent}) => {
      // payment Intent = payment confirmation
       setSucceeded(true);
       setError(null)
       setProcessing(false);

       history.replace('/orders')
    })
  };

  const handleChange = (e) => {
    SetDisabled(e.empty);
    setError(e.error ? e.e.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        {/*Payment section - delivery address */}

        <h1>
          Checkout(<Link to="/checkout"> {basket?.length} items</Link>)
        </h1>

        <div className="payment_section">
          <div className="payment_title">
            <h3> Delivery Address </h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>777 Dholakpur</p>
            <p>Pogo , India</p>
          </div>
        </div>
        {/*Payment section - Review Items  */}

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        {/*Payment section - Payment method */}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details">
            {/* Stripe */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />

              <div className="payment_price">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>Order Total : {value}</h3>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)} 
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"Rs"}
                />
                <button disabled={processing || disabled ||
                succeeded}>
                    <span> {processing ? <p>Processing</p>:"Buy Now"} </span>
                </button>
              </div>

              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
