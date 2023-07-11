// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcxLIujFFekjtHJw6IooetZEf1kkt0Skg",
  authDomain: "technet-ac1ac.firebaseapp.com",
  projectId: "technet-ac1ac",
  storageBucket: "technet-ac1ac.appspot.com",
  messagingSenderId: "19444613804",
  appId: "1:19444613804:web:436c67d2bd82ae77279509"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);