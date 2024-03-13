// imports
import express from 'express';
import viteExpress from 'vite-express';
import { Thing } from './models/model.js';

// Inits
let app = express();

// middleware
app.use(express.json());

// router
app.get('/stuff', async (req, res) => {
  let things = await Thing.findAll();
  res.send(things);
});

// Listen to server
viteExpress.listen(app, 4000, () => {
  console.log('listening on port 4000');
});
