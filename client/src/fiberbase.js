// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIBERBASE_API_KEY,
  authDomain: "mern-blog-d2b2d.firebaseapp.com",
  projectId: "mern-blog-d2b2d",
  storageBucket: "mern-blog-d2b2d.appspot.com",
  messagingSenderId: "984487358170",
  appId: "1:984487358170:web:b293696dd3e2a35d50bfe3",
  measurementId: "G-CJ4SQ9H4QS"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);