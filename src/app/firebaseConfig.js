import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  


const firebaseConfig = {
    apiKey: "AIzaSyAVQR9lTwla0Qww0ZV1y63rVWJ8BVW8hEY",
    authDomain: "enfp-chat-bot.firebaseapp.com",
    projectId: "enfp-chat-bot",
    storageBucket: "enfp-chat-bot.appspot.com",
    messagingSenderId: "808168040540",
    appId: "1:808168040540:web:6c63af1d034904eb641e99",
    measurementId: "G-NHF1SV7JR9"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 初始化 Firestore
const analytics = getAnalytics(app);

export { app, db }; 
