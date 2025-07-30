import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBQKuAa7GFpHj5WEKbiKhKWqQJREJBEBMk',
	authDomain: 'rn-fdp-auth.firebaseapp.com',
	projectId: 'rn-fdp-auth',
	storageBucket: 'rn-fdp-auth.firebasestorage.app',
	messagingSenderId: '892843846117',
	appId: '1:892843846117:web:733da999b871bbc44d670c',
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_APP = getFirestore(FIREBASE_APP);
