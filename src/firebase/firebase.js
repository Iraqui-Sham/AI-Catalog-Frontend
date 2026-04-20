import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔥 paste your config here
const firebaseConfig = {
  apiKey: "AIzaSyC3WQ3LsKn0HEesAaFxfW0agqLauxw_kBc",
  authDomain: "fitvisionai-cd305.firebaseapp.com",
  projectId: "fitvisionai-cd305",
  appId: "1:795469049388:web:e1f86c174e8ced105fab89",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();