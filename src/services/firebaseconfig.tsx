import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
