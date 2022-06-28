import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCFkDAJvh6_UQnhEjUK-8Obbk8w-OtnBbk",
    authDomain: "project-control-a02b2.firebaseapp.com",
    projectId: "project-control-a02b2",
    storageBucket: "project-control-a02b2.appspot.com",
    messagingSenderId: "833590440560",
    appId: "1:833590440560:web:9abfaf1174fff81d113ab5",
    measurementId: "G-LKY5RYLX0L"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();

export const register = (email: string, password: string) => createUserWithEmailAndPassword(auth, email, password);

export const login = (email: string, password: string) => signInWithEmailAndPassword(auth, email, password);

export const logout = () => signOut(auth);