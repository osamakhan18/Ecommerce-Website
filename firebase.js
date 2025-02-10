import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCUXDpwSreirOlxT0ZOxUazaqbo1R-vUuA",
    authDomain: "commerce-aunthection.firebaseapp.com",
    projectId: "commerce-aunthection",
    storageBucket: "commerce-aunthection.firebasestorage.app",
    messagingSenderId: "661550307228",
    appId: "1:661550307228:web:7c34103818495475521a59",
    measurementId: "G-JX4JVZJPZ3"
  };

 export  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);