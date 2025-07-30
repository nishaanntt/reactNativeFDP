import { getAuth } from 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
