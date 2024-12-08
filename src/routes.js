
import userRoutes from './routes/userRoutes';
import productRoutes from './routes/productRoutes';

function routes(app) {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
}

export default routes;
