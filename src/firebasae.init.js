// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgepniPkTr-PmM4x1_YiDZQwVve_Z0zdU",
  authDomain: "auth-moha-milon-9606b.firebaseapp.com",
  projectId: "auth-moha-milon-9606b",
  storageBucket: "auth-moha-milon-9606b.firebasestorage.app",
  messagingSenderId: "652456312562",
  appId: "1:652456312562:web:255894733e0d03a330da6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth