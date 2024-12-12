import { createPaymentIntent as createIntent } from "../services/paymentService.js";

export const createPaymentIntent = async (req, res) => {
  try {
    const { cart } = req.body;

    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "El carrito está vacío." });
    }

    const clientSecret = await createIntent(cart);
    res.status(200).json({ clientSecret });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
