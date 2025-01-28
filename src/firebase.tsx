import { initializeApp } from "firebase/app";
import { getAuth, FacebookAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuFySs_smYOOFFcdvbNsFvUUU02XXYzwo",
  authDomain: "facebookauthapp-1d9c2.firebaseapp.com",
  projectId: "facebookauthapp-1d9c2",
  storageBucket: "facebookauthapp-1d9c2.appspot.com",  
  messagingSenderId: "391507137065",
  appId: "1:391507137065:web:0a31897990bca47d5a4238",
  measurementId: "G-JEC5C8GNC8"
};

// Firebase init
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firebase Authentication and Facebook Provider init
const auth = getAuth(app);
const facebookProvider = new FacebookAuthProvider();

export { auth, facebookProvider, analytics };
