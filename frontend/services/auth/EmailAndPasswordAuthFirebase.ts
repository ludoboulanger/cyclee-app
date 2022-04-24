import EmailAndPasswordAuth from './EmailAndPasswordAuth';
import { getAuth, createUserWithEmailAndPassword, UserCredential, signInWithEmailAndPassword} from "firebase/auth";


export default class EmailAndPasswordAuthFirebase extends EmailAndPasswordAuth {

    constructor() {
       super();
    }

    signUp(email: string, password: string): Promise<UserCredential> {
        return createUserWithEmailAndPassword(getAuth(), email, password);
    }

    signIn(email: string, password: string): Promise<UserCredential> {
        return signInWithEmailAndPassword(getAuth(), email, password);
    }

    signOut(): Promise<void> {
        return getAuth().signOut();
    }
}