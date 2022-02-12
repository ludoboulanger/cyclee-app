import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
async function signIn(email, password){
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    return userCredential.user;
    // ...
  })
  .catch((error) => {
      throw error;
  });
}

module.exports = {signIn}