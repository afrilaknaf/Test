import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyBwfxrTAqwqVtlr_nPS_yPaOHhFCfG5B_0",
  authDomain: "rebase-authecation.firebaseapp.com",
  projectId: "rebase-authecation",
  storageBucket: "rebase-authecation.firebasestorage.app",
  messagingSenderId: "986854314959",
  appId: "1:986854314959:web:e59d841b10a2e2aeecb8ba",
  measurementId: "G-G1PNLNG0ZN"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();
