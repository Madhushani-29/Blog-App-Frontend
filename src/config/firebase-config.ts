// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHkFNsZAn_WMWaVqvuiw7mVpNvfA_IYsw",
  authDomain: "blog-app-a24f5.firebaseapp.com",
  projectId: "blog-app-a24f5",
  storageBucket: "blog-app-a24f5.appspot.com",
  messagingSenderId: "234652313978",
  appId: "1:234652313978:web:d27292299eda06e6784ec3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// use to register the users ni the project
export const auth=getAuth();
export default app;