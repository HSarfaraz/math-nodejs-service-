const express = require('express');

var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const port = process.env.PORT || 8080;

//routes will go here if

/* API add */
app.post('/add', function (req, res, next) {
  let input1 = req.body.input1;
  let input2 = req.body.input2;
  let sum = input1 + input2;
  console.log('sum', sum);
  res.send('addition is : ' + sum);
});

/* API sub */
app.post('/sub', function (req, res, next) {
  let input1 = req.body.input1;
  let input2 = req.body.input2;
  let sum = input1 - input2;
  console.log('sum', sum);
  res.send('Substraction is : ' + sum);
});

/* API multiply */
app.post('/multiply', function (req, res, next) {
  let input1 = req.body.input1;
  let input2 = req.body.input2;
  let sum = input1 * input2;
  console.log('sum', sum);
  res.send('Multiplication is : ' + sum);
});

/* API divid */
app.post('/divid', function (req, res, next) {
  let input1 = req.body.input1;
  let input2 = req.body.input2;
  let sum = input1 / input2;
  console.log('sum', sum);
  res.send('Dividation is : ' + sum);
});

app.listen(port);
console.log('Server started at http://localhost:' + port);
