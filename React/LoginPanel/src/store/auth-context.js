import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const LogInHangler = () => {
    localStorage.setItem("IsLoggedIn", "1");
    setIsLoggedIn(true);
  };
  const LogOutHangler = () => {
    localStorage.removeItem("IsLoggedIn");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const storedUserLoggedInData = localStorage.getItem("IsLoggedIn");

    if (storedUserLoggedInData === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: LogOutHangler,
        onLogin: LogInHangler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
