# Microservices (RESTful APIs)

## How to create a microservice & its APIs

<b>Step1:</b> Create Maths NodeJS microservice

```
mkdir maths-nodejs-service
cd my-nodejs-service
npm init -y
npm install express@4.17.1
npm install body-parser --save
```

<b>Step2:</b> Create server.js

```
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


```

<b>Step3:</b> Run the app

```
node server.js
```

## APIs

1. API add

```
 URL: http://localhost:8080/add
 Method: POST
 RequestBody: {
    "input1": 24,
    "input2": 12,
    "sum": 0
  }
```

2. API sub

```
 URL: http://localhost:8080/sub
 Method: POST
 RequestBody: {
    "input1": 24,
    "input2": 12,
    "sum": 0
  }
```

3. API mutiply

```
 URL: http://localhost:8080/multiply
 Method: POST
 RequestBody: {
    "input1": 24,
    "input2": 12,
    "sum": 0
  }
```

4. API divid

```
 URL: http://localhost:8080/divid
 Method: POST
 RequestBody: {
    "input1": 24,
    "input2": 12,
    "sum": 0
  }
```
