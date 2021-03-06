import { getAuth, signInWithEmailAndPassword, User } from "firebase/auth";

const auth = getAuth();
export async function signIn(email:string, password:string) : Promise<User> {
return signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    return userCredential.user;
    // ...
  })
  .catch((error) => {
      throw error;
  });
}
