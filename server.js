// imports
import express from 'express';
import viteExpress from 'vite-express';

// Inits
let app = express();

// middleware
app.use(express.json());

// router
app.get('/stuff', (req, res) => {
  res.send([1, 2, 3, 4]);
});

// Listen to server
viteExpress.listen(app, 4000, () => {
  console.log('listening on port 4000');
});
