import React, { useEffect } from "react";

const Login = ({ setLoading, setIsLoggedIn }) => {
  useEffect(() => {
    console.log("Login component mounted");
    return () => {
      console.log("Login component unmounted");
    };
  }, []);
  const loginUser = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsLoggedIn(true);
    }, 1000);
  };
  return (
    <div>
      <h2>Please login to continue.</h2>
      <button onClick={loginUser}>Login</button>
    </div>
  );
};

export default Login;
