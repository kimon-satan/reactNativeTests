import React from "react";
import { UserDetails } from "./UserDetails";
import { StyleSheet, Text } from "react-native";

export const SignUp = ({ firebaseIface }) => {
  const onSubmit = (data) => {
    console.log(data.email, data.password);
    firebaseIface.signup(data.email, data.password);
  };

  return (
    <>
      <Text style={styles.subtitle}>Sign Up</Text>
      <UserDetails submitted={onSubmit} />
    </>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18,
    color: "white",
    marginVertical: 10
  }
});
