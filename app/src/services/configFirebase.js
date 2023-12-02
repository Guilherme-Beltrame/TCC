
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore, getDoc, doc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDTg1WvVGL3JYLVDSNVHoEWsBHTI9pg9zk",
    authDomain: "trustygate-4a4e4.firebaseapp.com",
    projectId: "trustygate-4a4e4",
    storageBucket: "trustygate-4a4e4.appspot.com",
    messagingSenderId: "1095311351419",
    appId: "1:1095311351419:web:2eabbc3ab5dcb715dd0cde",
    measurementId: "G-RT9M3DSBG2"
  };
initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);