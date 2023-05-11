import { useState } from "react";
import { SignUp } from "./Signup";
import { SignIn } from "./Signin";
import { Button } from "react-native";

const LoginMenu = ({ onClick }) => {
  return (
    <>
      <Button title="sign in" onPress={() => onClick("signin")} />
      <Button title="sign up" onPress={() => onClick("signup")} />
    </>
  );
};

export const Login = ({ firebaseIface }) => {
  const [loginState, setLoginState] = useState("menu");

  const onClick = (e) => {
    setLoginState(e);
  };

  switch (loginState) {
    case "menu":
      return <LoginMenu onClick={onClick} />;
    case "signin":
      return <SignIn firebaseIface={firebaseIface} />;

    case "signup":
      return <SignUp firebaseIface={firebaseIface} />;
  }
};
