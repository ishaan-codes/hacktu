const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51PkS6MI4Xj2IZ3ExVQa8Mlc238SwCcf3o7r4uhrlcHLkJBL602NYms7jdobQYkOB0joPKcGls25cOBSU2zFhe8YH00Dlyp5mWY");

// API

// App config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API Routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment request received", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  response.status(201).send({
    clientSecret: paymentIntent.client_secret
  });
// response.json({ clientSecret: paymentIntent.client_secret });
});

// Listen command
exports.api = functions.https.onRequest(app);