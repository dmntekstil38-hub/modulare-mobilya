import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDJjq5Ib9guVLiIosw5dQEOe7wmsiAJp-Q",
  authDomain: "dumanware-pos.firebaseapp.com",
  projectId: "dumanware-pos",
  storageBucket: "dumanware-pos.firebasestorage.app",
  messagingSenderId: "264833470951",
  appId: "1:264833470951:web:921c0d8bd12e985790ed42"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);