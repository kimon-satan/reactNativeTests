import React from "react";

import { useForm, Controller } from "react-hook-form";
import { StyleSheet, View, Button, TextInput } from "react-native";

export const UserDetails = ({ submitted }) => {
  const {
    control,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => submitted(data);

  return (
    <View style={styles.formStyle}>
      <Controller
        control={control}
        name="email"
        onSubmit={onSubmit}
        render={({ field: { onChange, email, onBlur } }) => (
          <TextInput
            label="email"
            autoCapitalize="none"
            style={styles.textInput}
            onChangeText={(value) => onChange(value)}
            value={email}
            placeholder="email"
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        onSubmit={onSubmit}
        render={({ field: { onChange, password, onBlur } }) => (
          <TextInput
            label="password"
            autoCapitalize="none"
            secureTextEntry={true}
            style={styles.textInput}
            onChangeText={(value) => onChange(value)}
            value={password}
            placeholder="password"
          />
        )}
      />
      <Button
        style={styles.submitButton}
        title="submit"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formStyle: {
    flex: 2,
    gap: 20
  },
  textInput: {
    padding: 5,
    backgroundColor: "#fff",
    fontSize: 16,
    borderRadius: 10,
    width: 250
  },
  submitButton: {}
});
