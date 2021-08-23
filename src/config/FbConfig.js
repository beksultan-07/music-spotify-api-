import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBsn-MaRGYexCL-nloe2gi9t1E76EKfkrQ",
    authDomain: "first-project-471af.firebaseapp.com",
    databaseURL: "https://first-project-471af-default-rtdb.firebaseio.com",
    projectId: "first-project-471af",
    storageBucket: "first-project-471af.appspot.com",
    messagingSenderId: "35494723238",
    appId: "1:35494723238:web:cca27e3370451da3f8fe67",
    measurementId: "G-YZR49PNTKR"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()

export default firebase