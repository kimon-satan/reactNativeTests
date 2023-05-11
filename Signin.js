import React from "react";
import { UserDetails } from "./UserDetails";
import { StyleSheet, Text } from "react-native";

export const SignIn = ({ firebaseIface }) => {
  const onSubmit = (data) => {
    firebaseIface.signin(data.email, data.password);
  };

  return (
    <>
      <Text style={styles.subtitle}>Sign In</Text>
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
