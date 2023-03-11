import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDtvBuNVNIew0L42D0NGkoNSNDpzwevoqg",
  authDomain: "realm777.firebaseapp.com",
  projectId: "realm777",
  storageBucket: "realm777.appspot.com",
  messagingSenderId: "696103199296",
  appId: "1:696103199296:web:5157a3c63eb966c94bf5a5",
  measurementId: "G-P9EV87ZTL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getAuth(app);

