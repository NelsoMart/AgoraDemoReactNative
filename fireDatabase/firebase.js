// database/firebaseDb.js

import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB4KJ6djLqCeCIkP_LTa2g9qW7yF0mlpvg",
    authDomain: "inicio-1ba19.firebaseapp.com",
    databaseURL: "https://inicio-1ba19.firebaseio.com",
    projectId: "inicio-1ba19",
    storageBucket: "inicio-1ba19.appspot.com",
    messagingSenderId: "511957218886",
    appId: "1:511957218886:web:3603dcfd528537c4f5bc47"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
