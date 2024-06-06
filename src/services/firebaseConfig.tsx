import { initializeApp } from "firebase/app";
import { getFirestore,collection, addDoc, getDocs, doc, updateDoc,deleteDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDFx_nxwSkvl40Mx9KhMT2EsJ5nUJ9gZXw",
    authDomain: "projeto-autenticacao-eed62.firebaseapp.com",
    projectId: "projeto-autenticacao-eed62",
    storageBucket: "projeto-autenticacao-eed62.appspot.com",
    messagingSenderId: "158033886245",
    appId: "1:158033886245:web:2b6a437a2df23d371e53cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export{app,db,getFirestore,collection, addDoc, getDocs, doc, updateDoc,deleteDoc}
