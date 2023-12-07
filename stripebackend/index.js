const express = require("express");
const cors = require("cors");
require("dotenv").config({path:"./.env"});

const { v5: uuidv5, v4: uuidv4 } = require('uuid'); // Import v4 for generating a random UUID for the namespace
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);

const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello index stripe");
});

app.post('/payment', (req, res) => {
  const { product, token } = req.body;
  console.log("Product", product);
  console.log("Token", token);

  const namespace = uuidv4(); // Generate a random UUID for the namespace
  const idempotencyKey = uuidv5('someString', namespace);

  return stripe.customers.create({
    email: token.email,
    source: token.id
  }).then(customer => {
    return stripe.charges.create({
      amount: product.price * 100,
      currency: "usd",
      customer: customer.id,
      receipt_email: token.email,
      description: `Your purchase product is ${product.name}`,
      shipping: {
        name: token.card.name,
        address: {
          country: token.card.address_country
        }
      }
    }, { idempotencyKey });
  }).then(result => res.status(200).json(result))
    .catch(err => console.log(err));
});

app.listen(port, () => {
  console.log(`The app is running on port: ${port}`);
});
