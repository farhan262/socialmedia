
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyB16LlOXktz_ezoMFXdVkAxPZCftlGlPq8",
  authDomain: "socialmedia-109b6.firebaseapp.com",
  projectId: "socialmedia-109b6",
  storageBucket: "socialmedia-109b6.firebasestorage.app",
  messagingSenderId: "317077577076",
  appId: "1:317077577076:web:f061f7e5d49a9672ca6021"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app)
const storage = getStorage(app)

export{app,auth,firestore,storage}