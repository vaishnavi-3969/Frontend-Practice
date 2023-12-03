import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyC-_3VqcHq-SAMcFiFKwpCZS0rtOY8-olk",
  authDomain: "resto-reservations-ll.firebaseapp.com",
  projectId: "resto-reservations-ll",
  storageBucket: "resto-reservations-ll.appspot.com",
  messagingSenderId: "433322574109",
  appId: "1:433322574109:web:75889d45ad4a1b3d10a1f4",
  measurementId: "G-QRDRTV3Q19"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export {app, analytics};
