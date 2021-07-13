import config from "../firebaseServiceConfig";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";



firebase.initializeApp(config)

export const auth=firebase.auth()








export default firebase;
