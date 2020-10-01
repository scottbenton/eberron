import { createContext } from "react";
import { User } from "firebase";
interface IAuthContext {
  signIn: () => void;
  signOut: () => void;
  user?: User;
}

export const AuthContext = createContext<IAuthContext>({
  signIn: () => {},
  signOut: () => {},
});
