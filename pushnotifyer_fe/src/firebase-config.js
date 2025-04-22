// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//  const firebaseConfig = {
//   apiKey: "AIzaSyCXeut3ZLlmHJ5d9niVNJOQBVFdm3J9M8g",
//   authDomain: "posting-blog-333c3.firebaseapp.com",
//   projectId: "posting-blog-333c3",
//   storageBucket: "posting-blog-333c3.firebasestorage.app",
//   messagingSenderId: "76861467835",
//   appId: "1:76861467835:web:2cfae36bfa85335e624d9e",
//   measurementId: "G-XJ8QGBHRYZ"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Get messaging instance for notifications
const messaging = getMessaging(app);
export { messaging };