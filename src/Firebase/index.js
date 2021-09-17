import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
 
export default Firebase;

const firebaseInstance = new Firebase();
 
export { FirebaseContext, withFirebase, firebaseInstance };