

export default class EmailAndPasswordAuth {
    constructor() {
        if(this.constructor==EmailAndPasswordAuth) {
            throw new TypeError("Abstract class 'EmailAndPasswordAuth' cannot be instantiated directly.");
        }
    }

    signUp(email: string, password: string): Promise<any> {
        throw new TypeError("Abstract method 'signUp' not implemented.");
    }

    signIn(email: string, password: string): Promise<any> {
        throw new TypeError("Abstract method 'signIn' not implemented.");
    }

    signOut(): Promise<any> {
        throw new TypeError("Abstract method 'signOut' not implemented.");
    }
}