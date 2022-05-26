import React, { useEffect, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const CheckoutForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState("");
  const [success, setSuccess] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  const { _id, price, email, address, name, phone, partsName } = order;

  useEffect(() => {
    fetch("https://pitstop-parts-server.herokuapp.com/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ price: price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    setCardError(error?.message || "");
    setSuccess("");
    setProcessing(true);

    // Confirm card payment
    const { paymentIntent, error: intentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,
            address: address,
            phone: phone,
          },
        },
      });
    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      setSuccess("Your payment has been received. Thank you.");

      // Store payment in database
      const payment = {
        order: _id,
        name: partsName,
        transactionId: paymentIntent.id,
      };
      fetch(`https://pitstop-parts-server.herokuapp.com/paidOrder/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          setProcessing(false);
          console.log("success");
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          className="border p-5 border-success rounded"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          type="submit"
          disabled={!stripe || !clientSecret}
          className="btn btn-primary btn-sm mt-5"
        >
          Place Order
        </button>
      </form>
      {cardError && <p className="text-danger">{cardError}</p>}
      {success && (
        <div className="text-success font-bold">
          <p>{success}</p>
          <p className="text-orange-400">Your TrxId: {transactionId}</p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
