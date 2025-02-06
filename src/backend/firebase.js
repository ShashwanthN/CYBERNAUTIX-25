import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCW5gEtw8m7g-9dXsZ2vQbzQXX4T--zm_s",
    authDomain: "cybernautix-25.firebaseapp.com",
    projectId: "cybernautix-25",
    storageBucket: "cybernautix-25.firebasestorage.app",
    messagingSenderId: "239279195224",
    appId: "1:239279195224:web:45532ef380ca72386f762d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);