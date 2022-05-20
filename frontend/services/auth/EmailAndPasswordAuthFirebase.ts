import assert from "assert";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile} from "firebase/auth";
import { User } from '../../schemas/User';
import { Authenticator} from './index';

export default class EmailAndPasswordAuthFirebase implements Authenticator {


    async signUp(email: string, password: string, displayName: string): Promise<User> {
        const userCredential = await createUserWithEmailAndPassword(getAuth(), email, password);
        assert(userCredential.user.email, "User doesn't have an email");
        updateProfile(userCredential.user, {displayName});
        await sendEmailVerification(userCredential.user);
        return {displayName: displayName, 
                email: userCredential.user.email, 
                phoneNumber: userCredential.user.phoneNumber, 
                photoURL: userCredential.user.photoURL, 
                uid: userCredential.user.uid,
                emailVerified: userCredential.user.emailVerified};
    }

    async signIn(email: string, password: string): Promise<User> {
        const userCredential = await signInWithEmailAndPassword(getAuth(), email, password);
        assert(userCredential.user.email, "User doesn't have an email");
        return {displayName: userCredential.user.displayName || '', 
                email: userCredential.user.email, 
                phoneNumber: userCredential.user.phoneNumber, 
                photoURL: userCredential.user.photoURL, 
                uid: userCredential.user.uid,
                emailVerified: userCredential.user.emailVerified};

    }

    async signOut(): Promise<void> {
        await getAuth().signOut();
    }

    async updateProfile(user: User): Promise<void> {
        const currentUser = getAuth().currentUser;
        if(!currentUser) {
            throw new Error('User not logged in');
        }
        return updateProfile(currentUser, {displayName: user.displayName, photoURL: user.photoURL});
    }
}