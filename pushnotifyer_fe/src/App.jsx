import React, { useEffect } from "react";
import { getToken } from "firebase/messaging";
import { messaging } from "./firebase-config";
import { onMessage } from "firebase/messaging";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Message from "./components/Message";
import NotificationForm from "./components/NotificationForm";

function App() {
  useEffect(() => {
    // Request permission to show notifications
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        // If permission is granted, get the FCM token
        getToken(messaging, {
          vapidKey:
            "BNA7LIDBZsBZmKbdY0fckdH89251Wp4Uy4vWre61lJZnVX8ozJtzKAl8dsi4WoFgXdCl4amJn1aE-7bVnINWd48",
        }) // VAPID key from Firebase Console
          .then((currentToken) => {
            if (currentToken) {
              console.log("FCM Token:", currentToken);
              // You can send this token to your backend or store it
            } else {
              console.log(
                "No registration token available. Request permission to generate one."
              );
            }
          })
          .catch((err) => {
            console.log("An error occurred while retrieving the token.", err);
          });
      } else {
        console.log("Notification permission denied.");
      }
    });
  }, []);

  useEffect(() => {
    const unsubscribe = onMessage(messaging, (payload) => {
      toast(<Message notification={payload.notification} />);
    });

    return unsubscribe; // Cleanup on unmount
  }, []);

  return (
    <div>
      The main Application
      <NotificationForm/>
      <ToastContainer />
    </div>
  );
}

export default App;
