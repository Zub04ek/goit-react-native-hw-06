// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyACh5ocd-C3P-ofYLuq-0Zsa2MT_dDIy0c",
  authDomain: "rn-social-7fbc1.firebaseapp.com",
  databaseURL: "https://rn-social-7fbc1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "rn-social-7fbc1",
  storageBucket: "rn-social-7fbc1.appspot.com",
  messagingSenderId: "424180077487",
  appId: "1:424180077487:web:dfaac58a2f233fb5e5555a",
  measurementId: "G-8LRXCTETW8"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);