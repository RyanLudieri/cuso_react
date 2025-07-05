import { initializeApp } from "firebase/app";
import {getFireStore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDyAFvld7FB6tE79gpisgd0U6uaZfAAXjk",
  authDomain: "miniblog-85dde.firebaseapp.com",
  projectId: "miniblog-85dde",
  storageBucket: "miniblog-85dde.firebasestorage.app",
  messagingSenderId: "72562249896",
  appId: "1:72562249896:web:751d1c8ba6058a2526b29d"
};

const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export { db };



