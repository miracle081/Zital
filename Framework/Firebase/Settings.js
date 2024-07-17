// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDniS84UGMfd02B1mm9NafyBUfFbPGJKT8",
    authDomain: "zital-26bc3.firebaseapp.com",
    projectId: "zital-26bc3",
    storageBucket: "zital-26bc3.appspot.com",
    messagingSenderId: "953546374508",
    appId: "1:953546374508:web:e3072bd452c41835ad8749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)