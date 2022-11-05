// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

const firebaseConfig = {
  apiKey: "AIzaSyA_QBvO4BwaFIl1VHzoZ3lUiXAx_-7KYJA",
  authDomain: "genius-car-m66.firebaseapp.com",
  projectId: "genius-car-m66",
  storageBucket: "genius-car-m66.appspot.com",
  messagingSenderId: "465268777240",
  appId: "1:465268777240:web:9ddda39125f166a0b77e6d"
};




const app = initializeApp(firebaseConfig);

export default app;