import { initializeApp } from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyBblYD_2b889P_ljMr1yY2gjb-AVFyOcPY',
  authDomain: 'noteballs-d0918.firebaseapp.com',
  projectId: 'noteballs-d0918',
  storageBucket: 'noteballs-d0918.appspot.com',
  messagingSenderId: '948404892945',
  appId: '1:948404892945:web:b492623a1852ab177508b0',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db
}