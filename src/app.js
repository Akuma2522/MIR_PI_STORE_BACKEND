import express from 'express';
import configExpress from './config/express.js';
import routes from './routes.js';
//import fileUpload from 'express-fileupload'
const app = express();
//app.use(fileUpload({ useTempFiles: true }))
configExpress(app);
routes(app);

export default app;
