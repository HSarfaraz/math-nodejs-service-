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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

// routes will go here

/* API name */
app.get('/name', function (req, res, next) {
  res.send('Sarfraz Hussain');
});

/* API daughter */
app.get('/daughter', function (req, res, next) {
  res.send('Maryam Sarfraz');
});

/* API bhai */
app.get('/bhai', function (req, res, next) {
  var brotherCatogary = req.body.brotherCatogary;
  console.log(brotherCatogary);
  if (brotherCatogary == 'bada') {
    res.send('Siraj Chaudhary');
  } else if (brotherCatogary == 'chhota') {
    res.send('Aamer Sohail');
  } else {
    res.send('Not Found');
  }
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
