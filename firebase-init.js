import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD-6NW2vYZtrjiGiq_bGALytcd7buola4Y",
  authDomain: "osmanliinternet-e6f17.firebaseapp.com",
  databaseURL: "https://osmanliinternet-e6f17-default-rtdb.firebaseio.com",
  projectId: "osmanliinternet-e6f17",
  storageBucket: "osmanliinternet-e6f17.firebasestorage.app",
  messagingSenderId: "700865460425",
  appId: "1:700865460425:web:33e317550813f31c027518",
  measurementId: "G-6J0QH2E71J"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };