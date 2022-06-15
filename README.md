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

/* API add: using request body */
app.get('/add', function (req, res, next) {
  let input1 = req.body.input1;
  let input2 = req.body.input2;
  let sum = input1 + input2;
  console.log('sum', sum);
  res.send('addition is : ' + sum);
});

/* API sub: using request params */
app.get('/sub/:input1/:input2', function (req, res, next) {
  let input1 = Number(req.params.input1);
  let input2 = Number(req.params.input2);
  let sub = input1 - input2;
  console.log('sub', sub);
  res.send('Substraction is : ' + sub);
});

/* API multiply: using request query */
app.get('/multiply', function (req, res, next) {
  let input1 = Number(req.query.input1);
  let input2 = Number(req.query.input2);
  let mul = input1 * input2;
  res.send('Multiplication is : ' + mul);
});

/* API divid */
app.get('/divid', function (req, res, next) {
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
 Method: GET
 RequestBody: {
    "input1": 24,
    "input2": 12
  }
```

2. API sub

```
 URL: http://localhost:8080/sub/8/6
 Method: GET
 RequestBody: none
```

3. API mutiply

```
 URL: http://localhost:8080/multiply?input1=4&input2=4
 Method: GET
 RequestBody: none
```

4. API divid

```
 URL: http://localhost:8080/divid
 Method: GET
 RequestBody: {
    "input1": 24,
    "input2": 12
  }
```
