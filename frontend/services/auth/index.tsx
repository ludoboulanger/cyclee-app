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

interface authContextType {
  user: User | undefined;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  signUp: (
    email: string,
    password: string,
    displayName: string
  ) => Promise<void>;
  updateProfile: (user: User) => Promise<void>;
}

const authenticator = new EmailAndPasswordAuthFirebase();

export default function useProvideAuth() {
  const [user, setUser] = useState<User | undefined>(undefined);

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
      setUser(undefined);
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

const authContext = createContext<authContextType | undefined>(undefined);
interface Props {
  children: ReactNode;
}
export function AuthProvider({ children }: Props) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}
export const useAuth = () => {
  const auth = useContext(authContext);
  if (auth === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return auth;
};
