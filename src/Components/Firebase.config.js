// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD0O8Q1dH_iZRZ6tSXFeS-KNS2b67XoyKE",
  authDomain: "coffee-store-clients.firebaseapp.com",
  projectId: "coffee-store-clients",
  storageBucket: "coffee-store-clients.appspot.com",
  messagingSenderId: "577508281976",
  appId: "1:577508281976:web:09fc06fdb1442b5df4278d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
