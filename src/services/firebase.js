import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';

const credentials = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
};
console.log (process.env);
firebase.initializeApp (credentials);

const database = firebase.database ();
const storage = firebase.storage ();

export {
	database,
	storage,
};
