
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAmZABx4t5bXQp0yVt4Dv_N4j-pKgKcLQY",
  authDomain: "tourist-guide-2db3b.firebaseapp.com",
  projectId: "tourist-guide-2db3b",
  storageBucket: "tourist-guide-2db3b.appspot.com",
  messagingSenderId: "729226869953",
  appId: "1:729226869953:web:a6312b865f66d4fa35e840"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app