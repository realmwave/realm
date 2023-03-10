
import admin from "firebase-admin";
import dotenv from "dotenv";
import path from "path";
//import serviceAccountConfig from "./realm777-firebase-adminsdk-5dmmw-4f8fb3d3d6.json";
//const serviceAccount = require("path/to/serviceAccountKey.json");

dotenv.config({ path: path.join(__dirname, '..', '..', '.env') });


const SERVICEACCOUNT_CONFIG = {
  "type": process.env.FIREBASE_TYPE as string,
  "project_id": process.env.FIREBASE_PROJECT_ID as string,
  "private_key_id": process.env.FIREBASE_PRIVATEKEY_ID as string,
  "private_key": process.env.FIREBASE_PRIVATEKEY as string,
  "client_email": process.env.FIREBASE_CLIENT_EMAIL as string,
  "client_id": process.env.FIREBASE_CLIENT_ID as string,
  "auth_uri": process.env.FIREBASE_AUTH_URI as string,
  "token_uri": process.env.FIREBASE_TOKEN_URI as string,
  "auth_provider_x509_cert_url": process.env.FIREBASE_AUTHPROVIDER_CERT_URL as string,
  "client_x509_cert_url": process.env.FIREBASE_CLIENT_CERT_URL as string,
}

admin.initializeApp({
  credential: admin.credential.cert(JSON.parse(SERVICEACCOUNT_CONFIG))
});
