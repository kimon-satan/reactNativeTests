import { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Image,
  Pressable,
  FlatList
} from "react-native";

import FirebaseIface from "./FirebaseIface";

const PlaceholderImage = require("./assets/cat.jpeg");

const firebaseIface = new FirebaseIface();

export default function App() {
  const [users, setUsers] = useState([]);

  const usersChanged = (newUsers) => {
    console.log(newUsers);
    setUsers(newUsers);
  };

  useEffect(() => {
    if (users.length === 0) {
      firebaseIface.subscribeUsers(usersChanged);
    }
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.text}>Users</Text>
      <View>
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
        <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      </View>

      <ScrollView horizontal={true}>
        <FlatList
          data={users}
          renderItem={(user) => (
            <Text style={{ color: "white" }}>
              {[
                user.item.id,
                user.item.first,
                user.item.last,
                user.item.born
              ].join(", ")}
            </Text>
          )}
        />
      </ScrollView>

      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          padding: 12,
          borderRadius: 5,
          color: "white",
          borderWidth: 1
        }}
        defaultValue="You can type in me"
      />
      <Pressable
        style={styles.button}
        onPress={() => alert("You pressed a button.")}
      >
        <Text style={styles.buttonLabel}>Press me</Text>
      </Pressable>
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
      <StatusBar style="auto" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: "#25292e",
    gap: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  text: {
    color: "#fff",
    fontSize: 25,
    marginHorizontal: 10
  },

  button: {
    color: "#fff",
    fontSize: 25,
    padding: 25,
    borderColor: "white",
    borderWidth: 2
  },

  buttonLabel: {
    color: "#fff"
  }
});
