const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, result) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.json(result);
    }
  });
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
