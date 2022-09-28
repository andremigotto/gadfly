import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAj0kwMkbNjV4pNag-Uqm-PGoBOvt9TpqI",
    authDomain: "gadfly-1.firebaseapp.com",
    projectId: "gadfly-1",
    storageBucket: "gadfly-1.appspot.com",
    messagingSenderId: "922390392745",
    appId: "1:922390392745:web:def63751867af8cc025eb8",
    measurementId: "G-0MSZL1JC30"
}

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 * @param  {string} materias
 */
 export async function getUserWithUsername(username) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc;
  }

  export async function getMateria() {
    const materiaRef = firestore.collection('materias');
    const materiaDoc = (await materiaRef.get()).docs[0].data()
    return materiaDoc
  }

  
  /**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */

export function postToJSON(doc) {
    const data = doc.data();
    return {
      ...data,
      // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
      createdAt: data.createdAt.toMillis(),
      updatedAt: data.updatedAt.toMillis(),
    };
  }