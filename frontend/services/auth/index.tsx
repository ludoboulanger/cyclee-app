import { assert } from "console";
import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { User } from "../../schemas/User";
import EmailAndPasswordAuthFirebase from "./EmailAndPasswordAuthFirebase";

export interface Authenticator {
  signIn: (email: string, password: string) => Promise<User>;
  signOut: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<User>;
  updateProfile: (user: User) => Promise<void>;
}

const authenticator: Authenticator = new EmailAndPasswordAuthFirebase();

export default function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null);

  const signUp = (
    email: string,
    password: string,
    displayName: string
  ): Promise<void> => {
    return authenticator.signUp(email, password, displayName).then((user) => {
      setUser(user);
    });
  };

  const signIn = (email: string, password: string): Promise<void> => {
    return authenticator.signIn(email, password).then((user) => {
      setUser(user);
    });
  };

  const signOut = (): Promise<void> => {
    return authenticator.signOut().then(() => {
      setUser(null);
    });
  };

  const updateProfile = (user: User): Promise<void> => {
    return authenticator.updateProfile(user);
  };

  return {
    user,
    signUp,
    signIn,
    signOut,
    updateProfile,
  };
}

const authContext = createContext<ReturnType<typeof useProvideAuth> | null>(
  null
);
interface Props {
  children: ReactNode;
}
export function AuthProvider({ children }: Props) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  const auth = useContext(authContext);
  if (auth === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};
