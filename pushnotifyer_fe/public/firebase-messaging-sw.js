

// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

// Initialize the Firebase app in the service worker
// "Default" Firebase configuration (prevents errors)
const defaultConfig = {
  apiKey: true,
  projectId: true,
  messagingSenderId: true,
  appId: true,
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCXeut3ZLlmHJ5d9niVNJOQBVFdm3J9M8g",
//   authDomain: "posting-blog-333c3.firebaseapp.com",
//   projectId: "posting-blog-333c3",
//   storageBucket: "posting-blog-333c3.firebasestorage.app",
//   messagingSenderId: "76861467835",
//   appId: "1:76861467835:web:2cfae36bfa85335e624d9e",
//   measurementId: "G-XJ8QGBHRYZ"
// };

firebase.initializeApp(firebaseConfig || defaultConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
})