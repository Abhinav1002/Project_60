import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBDVO7Xo1aLYBOPRKxiPpl2Kqe3khFfBBQ",
  authDomain: "school-attendence-app-d2072.firebaseapp.com",
  databaseURL: "https://school-attendence-app-d2072-default-rtdb.firebaseio.com",
  projectId: "school-attendence-app-d2072",
  storageBucket: "school-attendence-app-d2072.appspot.com",
  messagingSenderId: "674315734331",
  appId: "1:674315734331:web:50fa9ea8dd83f17d6abb1e"
};
  

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.database();
