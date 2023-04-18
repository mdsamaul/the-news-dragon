// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCk8Dz89MRwCim7KiIqOjHY0kDcp_eK2Tc",
    authDomain: "the-news-gragon.firebaseapp.com",
    projectId: "the-news-gragon",
    storageBucket: "the-news-gragon.appspot.com",
    messagingSenderId: "595539263593",
    appId: "1:595539263593:web:1445b57692d4ea1f9be2f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;