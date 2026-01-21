// Firebase Configuration
// TODO: Replace with your Firebase config
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
        apiKey: "AIzaSyBFHgyqk16_cxG1o7EF2OQ8ksxsjA1ENKk",
        authDomain: "pq-hub-906ed.firebaseapp.com",
        databaseURL: "https://pq-hub-906ed-default-rtdb.firebaseio.com",
        projectId: "pq-hub-906ed",
        storageBucket: "pq-hub-906ed.appspot.com",
        messagingSenderId: "226267686237",
        appId: "1:226267686237:web:6f0583e680ee61cb8534b4",
        measurementId: "G-NX9Z51PMEJ"
    };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
