export const calculateTotal = (cart) => {
  if (!Array.isArray(cart)) {
    throw new Error("El carrito debe ser un arreglo.");
  }

  return cart.reduce((total, item) => {
    if (!item.price || !item.quantity) {
      throw new Error("Cada producto debe tener precio y cantidad.");
    }
    return total + item.price * item.quantity;
  }, 0);
};
