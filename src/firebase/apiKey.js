// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAx4OjxEyixRveO-aqCyeuDDfArROyt8xM",
  authDomain: "ilay-bags.firebaseapp.com",
  projectId: "ilay-bags",
  storageBucket: "ilay-bags.appspot.com",
  messagingSenderId: "980565769203",
  appId: "1:980565769203:web:bced904949467c467b3086"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp(){
    return app
}