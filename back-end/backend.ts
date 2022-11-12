import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCFMZQG9qXrWUimvvzj-knHNulX-IKLXh0",

  authDomain: "budgie-957db.firebaseapp.com",

  projectId: "budgie-957db",

  storageBucket: "budgie-957db.appspot.com",

  messagingSenderId: "164376495275",

  appId: "1:164376495275:web:fd176cae61cbf9e5a823ee"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

const port = 8080;