// src/lib/firebase.ts (or wherever you created this file)

// Import the main function to start Firebase
import { initializeApp, getApps, getApp } from "firebase/app";

// Import the functions for the services you want to use and Firestore specific functions
import { getAnalytics } from "firebase/analytics"; // For Google Analytics
import { getAuth } from "firebase/auth";           // For Authentication
import { getFirestore } from "firebase/firestore"; // For Cloud Firestore
import { getStorage } from "firebase/storage";     // For Cloud Storage


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNbHazLr6f6LlACU3cL33h_SCPD-vFlLU",
  authDomain: "ctoc-25486.firebaseapp.com",
  projectId: "ctoc-25486",
  storageBucket: "ctoc-25486.firebasestorage.app",
  messagingSenderId: "874662606880",
  appId: "1:874662606880:web:13f16c2550f4f3d1022445",
  measurementId: "G-GR399DZFC0"
};

// Initialize Firebase App only if it hasn't been initialized already
import { collection, addDoc, Timestamp } from "firebase/firestore";
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Analytics only in the browser environment (required for Next.js)
let analytics;
if (typeof window !== 'undefined') {
   // Initialize Analytics only in the browser environment
   analytics = getAnalytics(app);

}


// Get references to the other services you want to use
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);


// Export the initialized app and services so you can use them in other files
export { app, auth, analytics, firestore, storage };

// Function to add a submission to a specified Firestore collection
export const addSubmissionToFirestore = async (collectionName: string, submissionData: object) => {
    try {
        const collectionRef = collection(firestore, collectionName);
        // Add a server-side timestamp using Timestamp.now()
        await addDoc(collectionRef, { ...submissionData, timestamp: Timestamp.now() });
        console.log(`Submission added to ${collectionName}`);
    } catch (e) {
        console.error("Error adding document: ", e);
        throw e; // Re-throw the error to be caught by the calling function
    }
};
