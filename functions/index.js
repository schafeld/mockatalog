'use strict';

const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const app = express();


// The Firebase Admin SDK to access the Firebase Realtime Database.
admin.initializeApp();
// Since this code will be running in the Cloud Functions environment
// we call initialize Firestore without any arguments because it
// detects authentication from the environment.
const firestore = admin.firestore();


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
  // This line won't have any use in production, only for local debugging
  console.log('Request Query Params: ', req.query);

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


/**
 * Simple request reading mock user data from Firebase Firestore database
 * Try: https://us-central1-mockatalog.cloudfunctions.net/api/userProfile/bob
 */
app.get('/userProfile/:userId', (req, res) => {
  var docRef = firestore.collection("userProfiles").doc(req.params.userId);

  // See https://firebase.google.com/docs/firestore/query-data/get-data#get_a_document
  docRef.get().then((doc) => {
      if (doc.exists) {
          return res.status(200).json(doc.data());
      } else {
          return res.status(400).json({"message":"User ID not found."});
      }
  }).catch((error) => {
      return res.status(400).json({"message":"Unable to connect to Firestore."});
  });
});
/* [END `/userProfile` ] */


// Define the Firebase function that will act as Express application
// Note: This `api` must match with `/firebase.json` rewrites rule.
exports.api = functions.https.onRequest(app);
