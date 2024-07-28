
import{initializeApp} from 'firebase/app'
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAqdgOYwk3btWYKnBy4L0LdogXJqDBPduY",
    authDomain: "employee-management-syst-e1f5f.firebaseapp.com",
    projectId: "employee-management-syst-e1f5f",
    storageBucket: "employee-management-syst-e1f5f.appspot.com",
    messagingSenderId: "953992681087",
    appId: "1:953992681087:web:50ece839ee88f1d89d914a"
  };

  initializeApp(firebaseConfig)

  const dbb=getFirestore()
  export {dbb}