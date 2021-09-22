

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyBf5hecaiOMy2sjNBPDqzemhuJN82Bl6Lo",
    authDomain: "chat-app-1a2bb.firebaseapp.com",
    databaseURL: "https://chat-app-1a2bb-default-rtdb.firebaseio.com",
    projectId: "chat-app-1a2bb",
    storageBucket: "chat-app-1a2bb.appspot.com",
    messagingSenderId: "432557440274",
    appId: "1:432557440274:web:f1805e48e5c086432007cb",
    measurementId: "G-E355FRHEER"
  };
  
 
const app=firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export const database=app.database();