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
 * Say hello API
 * Try: https://us-central1-mockatalog.cloudfunctions.net/api/say/hello
 */
app.get('/say/hello', (req, res) => {
  // Return success response
  return res.status(200).json({"message":"Hello there... Welcome to Mockatalog server."});
});


// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);
