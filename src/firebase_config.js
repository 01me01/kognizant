import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBtzWZFEBMRRCuZTBxRnOEalExtKuZWfEI",
    authDomain: "kognizant-b4d57.firebaseapp.com",
    projectId: "kognizant-b4d57",
    storageBucket: "kognizant-b4d57.appspot.com",
    messagingSenderId: "380746674173",
    appId: "1:380746674173:web:82bfce3389358805297394",
    measurementId: "G-DQSXFHFRZ6"
  };

const app= initializeApp(firebaseConfig);

export  const auth= getAuth(app)