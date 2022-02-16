import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ7O0_Q0jve6VmcPoKMdwE9B-BLRsM-HI",
  authDomain: "cyclee.firebaseapp.com",
  projectId: "cyclee",
  storageBucket: "cyclee.appspot.com",
  messagingSenderId: "695210684586",
  appId: "1:695210684586:web:987561a95b6e18a73260d3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;