import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDf_0yOggYSO8dRoWknKvP18T9C4bTqYN0",
    authDomain: "crud-udemy-react-398b9.firebaseapp.com",
    projectId: "crud-udemy-react-398b9",
    storageBucket: "crud-udemy-react-398b9.appspot.com",
    messagingSenderId: "21154444953",
    appId: "1:21154444953:web:ec6bc27dd627aace1fea08"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export {firebase}