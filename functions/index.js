'use strict';

// [START import]
const functions = require('firebase-functions');
const express = require('express');
const app = express();
// [END import]

// [START middleware]
const cors = require('cors')({origin: true});
app.use(cors);
// [END middleware]

/**
 * Say hello <name> as response
 * Try: https://us-central1-mockatalog.cloudfunctions.net/api/say/hello
 * or with name url parameter: https://us-central1-mockatalog.cloudfunctions.net/api/say/hello?name=Ryan
 */
app.get('/say/hello', (req, res) => {
  // This line won't work online
  console.log('Request Query Params: ', req.query ? req.query : 'none');

  // Response can be dynamic based on input
  if(req.query.hasOwnProperty('name') && req.query.name !== "") {
    return res.status(200)
      .json({"message":"Hello " + req.query.name + "! Welcome to Mockatalog."});
 }

  // Success response
  return res.status(200)
    .json({"message":"Hello there... Welcome to Mockatalog."});
});
/* [END `/say/hello` ] */


// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);
