// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// 💕 Config dari sayangg sendiri, udah dibenerin yaa
const firebaseConfig = {
  apiKey: "AIzaSyByX982rHPyuf3AUsYvVQxogdmb5hEF3-E",
  authDomain: "scrapbook-cinta-2d521.firebaseapp.com",
  projectId: "scrapbook-cinta-2d521",
  storageBucket: "scrapbook-cinta-2d521.appspot.com",
  messagingSenderId: "30462492379",
  appId: "1:30462492379:web:25b00dd92234f9f86856fe"
};

// 💖 Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);

// 🫶 Ekspor Auth dan Firestore
export const auth = getAuth(app);
export const db = getFirestore(app);