import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBctoaasJVs9bN9hAOFAtnfhqlRbUDTYOc",
    authDomain: "discord-clone-70009.firebaseapp.com",
    projectId: "discord-clone-70009",
    storageBucket: "discord-clone-70009.appspot.com",
    messagingSenderId: "359587606439",
    appId: "1:359587606439:web:71ac6d5648ff4ca3f61082"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};

  export default db;