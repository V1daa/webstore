// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvrex66UmUKqte2zXcgSqauzCz1Q2Xv7M",
  authDomain: "web-game-store.firebaseapp.com",
  projectId: "web-game-store",
  storageBucket: "web-game-store.appspot.com",
  messagingSenderId: "307195382598",
  appId: "1:307195382598:web:94ddeb8792c6594dfbb347"
};

// Initialize Firebase
const app = getApps().length?getApp():initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app, auth}