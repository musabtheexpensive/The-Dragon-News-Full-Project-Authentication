// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqj1AUoZF_7pT96YH-p3omXmyufT82T6o",
  authDomain: "react-dragon-news-auth-6a006.firebaseapp.com",
  projectId: "react-dragon-news-auth-6a006",
  storageBucket: "react-dragon-news-auth-6a006.appspot.com",
  messagingSenderId: "185673576578",
  appId: "1:185673576578:web:c13682de79f8d7ab74849b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;