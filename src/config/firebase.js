// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtrNq8dppD3nMPmfeXXLz0UGrMySdCc_I",
  authDomain: "authwithfirebase-c6871.firebaseapp.com",
  projectId: "authwithfirebase-c6871",
  storageBucket: "authwithfirebase-c6871.appspot.com",
  messagingSenderId: "11203403355",
  appId: "1:11203403355:web:5e97c1bed652c94250a97e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const GoogleProvider = new GoogleAuthProvider();

const createUser = async (email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    return user;
  } catch (error) {
    throw Error(error);
  }
};

const loginUser = async (email, password) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    return res;
  } catch (error) {
    throw Error(error);
  }
};
const resetUser = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw Error(error);
  }
};

const createUserWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, GoogleProvider);
    return res.user;
  } catch (error) {
    throw Error(error);
  }
};

export { auth, createUser, createUserWithGoogle, loginUser, resetUser };
