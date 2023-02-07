import { initializeApp } from 'firebase/app';
import * as auth from "firebase/auth";

// Optionally import the services that you want to use
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDa_fJMHea5y3EULVelxUr89QFXNEiCbHY",
    authDomain: "mealstogo-76d25.firebaseapp.com",
    projectId: "mealstogo-76d25",
    storageBucket: "mealstogo-76d25.appspot.com",
    messagingSenderId: "966516387081",
    appId: "1:966516387081:web:0a5216a83086b462a177d8"
};

initializeApp(firebaseConfig);
const getAuth = auth.getAuth();

export const firebase = { auth,getAuth }
