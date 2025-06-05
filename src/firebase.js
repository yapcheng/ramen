// src/api/firebaseConfig.js

// 1. 引入 Firebase SDK
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// 2. 你的 Firebase 專案設定
const firebaseConfig = {
  apiKey: "AIzaSyChEk2qZ_H40005upfk_t4aFBpOLWlWkxo",
  authDomain: "raman-review.firebaseapp.com",
  projectId: "raman-review",
  storageBucket: "raman-review.firebasestorage.app",
  messagingSenderId: "1083412705847",
  appId: "1:1083412705847:web:b539c9cf5ccd1f7c01c5b2",
  measurementId: "G-SV08G4621E"
};

// 3. 初始化 Firebase App
const app = initializeApp(firebaseConfig);

// 4. 初始化 Analytics（可選）
const db = getFirestore(app);
const firebaseAuth = getAuth(app);

// 5. 初始化 Firestore（🔥這是你之後要用的）
export  { db };
export { firebaseAuth };
