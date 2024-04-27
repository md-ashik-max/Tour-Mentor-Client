// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQNo1Ju2_ymR8Mp4eroS0h3lPz_6lhcRU",
  authDomain: "tour-mentor-442d5.firebaseapp.com",
  projectId: "tour-mentor-442d5",
  storageBucket: "tour-mentor-442d5.appspot.com",
  messagingSenderId: "274689826917",
  appId: "1:274689826917:web:452063d7d239e704e2a68c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;