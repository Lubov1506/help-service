import { getApps, initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

import { getAuth, signInAnonymously } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyB6aLPWP_ItLCVm_i2H3aaXbZ21WQ30oUo",
  authDomain: "psychologists-8018c.firebaseapp.com",
  databaseURL:
    "https://psychologists-8018c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "psychologists-8018c",
  storageBucket: "psychologists-8018c.firebasestorage.app",
  messagingSenderId: "214834651748",
  appId: "1:214834651748:web:b303ba60bfb8b9b75fb571",
  measurementId: "G-053R1MJKMD",
}

const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)

export async function authenticate() {
  const auth = getAuth(app)
  try {
    await signInAnonymously(auth)
    console.log("Signed in anonymously")
  } catch (error) {
    console.error("Authentication error", error)
  }
}