const express = require('express');

const app = express();
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/isActive', (req, res) => {
  res.status(200).send('active');
});

app.use(express.static('dist'));
app.use(express.static('src/client'));
app.use(express.static('node_modules'));

app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);
