import React from "react";
import { useDispatch } from "react-redux";
import { loginAction, logoutAction } from "../store/feature/login/LoginSlice";

const LoginComponent = () => {
  const dispatch = useDispatch();
  // ! usedispatch action lari calistirir.

  return (
    <>
      <h1>Login Component</h1>
      <button
        onClick={() => {
          dispatch(loginAction({ name: "fatih", surname: "aksoy" }));
        }}
      >
        Login
      </button>
      <button
        onClick={() => {
          dispatch(logoutAction());
        }}
      >
        Logout
      </button>
    </>
  );
};

export default LoginComponent;
