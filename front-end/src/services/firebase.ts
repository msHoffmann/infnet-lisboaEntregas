import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDMQnTLpPYtHx2GPJRr25aI26sBPe_k4_o",
  authDomain: "lisboa-entregas-19d6c.firebaseapp.com",
  projectId: "lisboa-entregas-19d6c",
  storageBucket: "lisboa-entregas-19d6c.appspot.com",
  messagingSenderId: "18986370345",
  appId: "1:18986370345:web:18c43a49b9ef52da7ca338"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)