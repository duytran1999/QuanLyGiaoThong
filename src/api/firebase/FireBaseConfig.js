import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyA0wnJmoamaQFb15o7ZAPFzF_g2pnPi8Qw",
    authDomain: "quanlygiaothong-a9b99.firebaseapp.com",
    projectId: "quanlygiaothong-a9b99",
    storageBucket: "quanlygiaothong-a9b99.appspot.com",
    messagingSenderId: "773066676014",
    appId: "1:773066676014:web:0df8cb19b7019a98e28cbf"
};

export const FirebaseApp = firebase.initializeApp(firebaseConfig);

