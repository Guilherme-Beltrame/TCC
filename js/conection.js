console.log("Entrou CN");

const firebaseConfig = {
  apiKey: "AIzaSyDH0yxSGglSmx9mkOpi4rtfNQ_buZWIiQo",
  authDomain: "trustygate.firebaseapp.com",
  projectId: "trustygate",
  storageBucket: "trustygate.appspot.com",
  messagingSenderId: "196362793357",
  appId: "1:196362793357:web:14a41731412ce238044dc4",
  measurementId: "G-R5XLVBR5K9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
