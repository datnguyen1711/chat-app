import { onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      // The signed-in user info.
      if (user) {
        const { displayName, uid, email, photoURL } = user;
        setUser({ displayName, uid, email, photoURL });
        navigate("/");
        return;
      }
      navigate("/login");
    });

    return () => {
      unsubcribe();
    };
  }, [navigate]);

  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
