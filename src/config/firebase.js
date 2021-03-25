import * as firebase from 'firebase/app'

import 'firebase/auth'
// firebaseAuthを読み込む

const firebaseConfig = {
    apiKey: "AIzaSyDGJcX84FBrtkJFgddIoHAU4HHr2wNRfLg",
    authDomain: "chat-app-a58e7.firebaseapp.com",
    projectId: "chat-app-a58e7",
    storageBucket: "chat-app-a58e7.appspot.com",
    messagingSenderId: "244689156825",
    appId: "1:244689156825:web:d8e81d0f3ff92402fd1cc8"
}

firebase.initializeApp(firebaseConfig)

export default firebase