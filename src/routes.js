
import userRoutes from './routes/userRoutes.js';
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import paymentRoutes from './routes/paymentRoutes.js';

function routes(app) {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/auth", authRoutes);
  app.use("/api/create-payment-intent", paymentRoutes);
}

export default routes;
