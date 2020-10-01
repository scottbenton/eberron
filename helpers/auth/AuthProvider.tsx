import React from "react";
import { AuthContext } from "./AuthContext";
import firebase, { User } from "firebase";
import { auth } from "../firebase";
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export const AuthProvider: React.FC = (props) => {
  const { children } = props;

  const [user, setUser] = React.useState<User | null>();

  const signIn = () => {
    auth.signInWithPopup(googleAuthProvider).then((result) => {
      setUser(result.user);
    });
  };
  const signOut = () => {
    auth.signOut().then(() => setUser(null));
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
