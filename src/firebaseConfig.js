import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9WDt7_XVzxOFM056s9K5es7ytd_Z2XDw",
  authDomain: "retink-ede43.firebaseapp.com",
  projectId: "retink-ede43",
  storageBucket: "retink-ede43.appspot.com",
  messagingSenderId: "321750886753",
  appId: "1:321750886753:web:6c72df515ded931f1e3d20",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export default app;
