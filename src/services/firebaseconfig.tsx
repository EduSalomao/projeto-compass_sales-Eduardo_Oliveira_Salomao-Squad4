// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTPoAPg_GsJsYqBgMENaE9l9SMIVMz5xU",
  authDomain: "compass-sales-f14f9.firebaseapp.com",
  databaseURL: "https://compass-sales-f14f9-default-rtdb.firebaseio.com",
  projectId: "compass-sales-f14f9",
  storageBucket: "compass-sales-f14f9.appspot.com",
  messagingSenderId: "49034488290",
  appId: "1:49034488290:web:cdcd7720ea5ca4f76071bb",
  measurementId: "G-ZVJEZ0DYPD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };
