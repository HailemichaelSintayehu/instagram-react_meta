import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
const firebaseConfig = {
  apiKey: "AIzaSyBW6kHvwzg6HLK_Xy583FSbcNL9NVIHK8o",
  authDomain: "instagram-react-c7e39.firebaseapp.com",
  projectId: "instagram-react-c7e39",
  storageBucket: "instagram-react-c7e39.appspot.com",
  messagingSenderId: "921595066662",
  appId: "1:921595066662:web:f42d733fe29abe5b6ea9e7",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const db = firebaseApp.firestore();
console.log("the value of db",db);
// const auth = firebaseApp.auth();
// console.log("the value of firebase.auth",firebase.auth());
// const storage = firebaseApp.storage()
// console.log("the value of storage",firebase.storage()); 

export { db };
