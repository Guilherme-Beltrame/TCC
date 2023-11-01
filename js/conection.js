console.log("Entrou CN");

const firebaseConfig = {
  apiKey: "AIzaSyDTg1WvVGL3JYLVDSNVHoEWsBHTI9pg9zk",
  authDomain: "trustygate-4a4e4.firebaseapp.com",
  projectId: "trustygate-4a4e4",
  storageBucket: "trustygate-4a4e4.appspot.com",
  messagingSenderId: "1095311351419",
  appId: "1:1095311351419:web:2eabbc3ab5dcb715dd0cde",
  measurementId: "G-RT9M3DSBG2"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

