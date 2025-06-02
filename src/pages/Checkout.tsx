import { FormEvent, useContext, useEffect, useState } from "react";
import Page from "../classes/Page";
import {
  bluebgColor,
  primaryTextColors,
  secondaryTextColor,
} from "../variables/styles/colors";
import { flex_between } from "../variables/styles/display/flex";
import { maxScreenXl } from "../variables/styles/size";
import {
  extraLargeText,
  largeText,
  sectionHeader,
} from "../variables/styles/text";
import { ProductContext } from "../context/ProductContext";
import {
  calculateTotalShopPrice,
  handleInputChange,
} from "../variables/functions/formChange";
import { checkoutForm } from "../variables/objects/emptyObjects";
import Text from "../components/input/Text";
import { loadStripe, StripeCardNumberElement } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { inputField } from "../variables/styles/input/input";
import ToastMessage from "../components/toast/Message";
import axios from "axios";
import { BASE_API_URL } from "../config";

const key =
  "pk_test_51RTSl2CQOrKv2UDEM3wxT2UG6YWTvPmmxu00EA0NRftz62g44f7emTPuNhef6UUdgOblpNPsn5XwUyQgXbx8SwAI008XDQoOxo";
const stripePromise = loadStripe(key);

const CardForm = () => {
  const { cart } = useContext(ProductContext);
  const [formProp, setFormProp] = useState(checkoutForm);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTotal(calculateTotalShopPrice(cart));
    }, [cart]);

  const submitForm = async (e: FormEvent) => {
    e.preventDefault();
    setCardError(null);

    if (!stripe || !elements) return;

    const cardNumberElement = elements.getElement(CardNumberElement);

    if (!cardNumberElement) {
      setCardError("Card number element not found.");
      return;
    }

    setLoading(true);

    try {
                      
        const result = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumberElement as StripeCardNumberElement,
        });
      if (cart.length === 0) {
        setMessage("Cart cannot be empty");
        return;
      }

      if (result.error) {
        setMessage("Card validation failed")
        return;
      }

      const orderedItems: any[] = [];

      cart.map((item) => {
        const price = item.stock * item.productRef.price;
        orderedItems.push({
          name: item.productRef.name,
          stock: item.stock,
          color: item.color,
          price,
        });
      });

      const finalDataObj = {
        ...formProp,
        payment_id: result.paymentMethod.id,
        total,
        items: { create: orderedItems },
      };

      await axios.post(`${BASE_API_URL}/products/order`, finalDataObj);
      setMessage("Order recieved. Thank you");
    } catch (err: any) {
      console.log(err);
      setMessage(err.response.data.message);
    }

    setLoading(false);
  };


  return (
    <Page>
      <div className={maxScreenXl}>
        <h1 className={sectionHeader}>Checkout</h1>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            <form
              onSubmit={submitForm}
              className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow"
            >
              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Text
                    id="firstName"
                    label="First name"
                    type="text"
                    placeholder="John..."
                    value={formProp.firstName}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                  <Text
                    id="lastName"
                    label="Last name"
                    type="text"
                    placeholder="Doe..."
                    value={formProp.lastName}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                </div>
                <div className="mt-4">
                  <Text
                    id="email"
                    label="Last name"
                    type="email"
                    placeholder="JohnDoe@gmail.com.."
                    value={formProp.email}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                </div>
                <div className="mt-4">
                  <Text
                    id="phone"
                    label="Phone"
                    type="tel"
                    placeholder="+355 1234567"
                    value={formProp.phone}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                </div>
              </div>

              <div className="mb-6">
                <h3 className={`${largeText} font-medium mb-2`}>
                  Shipping Address
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Text
                    id="street"
                    label="Street address"
                    type="text"
                    placeholder="john street..."
                    value={formProp.street}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                  <Text
                    id="country"
                    label="Country"
                    type="text"
                    placeholder="country..."
                    value={formProp.country}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                  <Text
                    id="city"
                    label="City"
                    type="text"
                    placeholder="city..."
                    value={formProp.city}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                  <Text
                    id="zip"
                    label="ZIP"
                    type="number"
                    placeholder="zip..."
                    value={formProp.zip}
                    isRequired={true}
                    handleChange={(e: FormEvent<HTMLInputElement>) =>
                      handleInputChange(e, setFormProp)
                    }
                  />
                </div>
              </div>
                    <h2 className={`${extraLargeText} font-semibold`}>
                        Billing Details
                    </h2>
              <div className="space-y-2 my-4">
                <label className={`${secondaryTextColor} mb-5`}>Card Number</label>
                <CardNumberElement
                className={inputField}
                options={{ showIcon: true }}
                />

                <div className="grid sm:grid-cols-2 place-items-center gap-x-4">
                    <div className="w-full">
                        <label className={`${secondaryTextColor} mb-5`}>Expiry</label>
                        <CardExpiryElement className={inputField} />
                    </div>

                    <div className="w-full">
                        <label className={`${secondaryTextColor} mb-5`}>CVC</label>
                        <CardCvcElement className={inputField} />
                    </div>
                </div>

                {cardError && <p className="text-red-500 text-sm">{cardError}</p>}
            </div>

              <button type="submit" className={`${bluebgColor} cursor-pointer w-full py-2 rounded`}>
                Place Order
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/3">
            <div className="bg-white dark:bg-neutral-700 p-6 rounded-lg shadow">
              <h2 className={`${extraLargeText} font-semibold mb-4`}>
                Order Summary
              </h2>
              <div className="space-y-4">
                {cart.length > 0 &&
                  cart.map((item) => {
                    const price = item.stock * item.productRef.price;
                    return (
                      <div
                        key={item.id}
                        className={`${flex_between} ${secondaryTextColor}`}
                      >
                        <span>
                          {item.productRef.name} {item.color && item.color}
                        </span>
                        <span>${price}</span>
                      </div>
                    );
                  })}
                <div
                  className={`${flex_between} ${primaryTextColors}  font-semibold`}
                >
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {loading && "Loading..."}
      {message && (
        <ToastMessage message={message} closeMessage={() => setMessage("")} />
      )}
    </Page>
  );
};

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
        <CardForm />
    </Elements>
  );
};

export default Checkout;
