// src/services/paymentService.js
import Stripe from "stripe";
import { calculateTotal } from "../utils/calculateTotal.js";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const createPaymentIntent = async (cart) => {
  const totalAmount = calculateTotal(cart);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalAmount,
    currency: "usd",
  });

  return paymentIntent.client_secret;
};
