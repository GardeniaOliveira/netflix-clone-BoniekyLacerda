
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDVWuQeIMC1wkeEvXlw7Ud5-SNfqCcR-G4",
    authDomain: "netflix-clone-4265d.firebaseapp.com",
    projectId: "netflix-clone-4265d",
    storageBucket: "netflix-clone-4265d.appspot.com",
    messagingSenderId: "288607349199",
    appId: "1:288607349199:web:1b374bb186f31a51f14aba"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);