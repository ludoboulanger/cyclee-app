import EmailAndPasswordAuth from './EmailAndPasswordAuth';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification} from "firebase/auth";
import { User } from '../../schemas/User';


export default class EmailAndPasswordAuthFirebase {


    async signUp(email: string, password: string): Promise<User> {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        await sendEmailVerification(userCredential.user);
        return {displayName: userCredential.user.displayName, 
                email: userCredential.user.email, 
                phoneNumber: userCredential.user.phoneNumber, 
                photoURL: userCredential.user.photoURL, 
                uid: userCredential.user.uid};
    }

    async signIn(email: string, password: string): Promise<User> {
        const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
        return {displayName: userCredential.user.displayName, 
                email: userCredential.user.email, 
                phoneNumber: userCredential.user.phoneNumber, 
                photoURL: userCredential.user.photoURL, 
                uid: userCredential.user.uid};
    }

    async signOut(): Promise<void> {
        await getAuth().signOut();
    }
}