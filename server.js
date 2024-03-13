// imports
import express from 'express';
import viteExpress from 'vite-express';
import { Thing } from './models/model.js';
import dotenv from 'dotenv';

// Inits
let app = express();
dotenv.config();

const PORT = process.env.PORT;

// middleware
app.use(express.json());

// router
app.get('/stuff', async (req, res) => {
  let things = await Thing.findAll();
  res.send(things);
});

// Listen to server
viteExpress.listen(app, PORT, () => {
  console.log(`listening on port ${PORT}`);
});
