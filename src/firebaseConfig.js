// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBWlxQyBs6hvxcn7g_2ZUAghX1KgGQPCFM",
    authDomain: "flowingfusion-2019a.firebaseapp.com",
    projectId: "flowingfusion-2019a",
    storageBucket: "flowingfusion-2019a.appspot.com",
    messagingSenderId: "53140950486",
    appId: "1:53140950486:web:2b84f0fdd665e3e226e877",
    measurementId: "G-H6DKT79JY1"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
