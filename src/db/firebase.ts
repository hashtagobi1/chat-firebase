// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7VKQEDYWlCQgUli7U9a4afUgyN73VUiI",
  authDomain: "chat-app-fa83a.firebaseapp.com",
  projectId: "chat-app-fa83a",
  storageBucket: "chat-app-fa83a.appspot.com",
  messagingSenderId: "829541668203",
  appId: "1:829541668203:web:640bc5176c45d7bfcc282e",
  measurementId: "G-Q0XTKZPK9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
