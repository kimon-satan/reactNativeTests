import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, Button } from "react-native";

import FirebaseIface from "./FirebaseIface";
import { Login } from "./Login";
import { Stories } from "./Stories";

const firebaseIface = new FirebaseIface();

export default () => {
  const [user, setUser] = useState(null);

  const userChanged = (tuser) => {
    setUser(tuser);
  };

  useEffect(() => {
    firebaseIface.subscribeUser(userChanged);
  });

  const innerContent = user ? (
    <>
      <Button title="Sign out" onPress={() => firebaseIface.signout()} />
      <Stories firebaseIface={firebaseIface} />
    </>
  ) : (
    <Login firebaseIface={firebaseIface} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.storia}>Storia</Text>
      {innerContent}
    </SafeAreaView>
  );
};

// export default function App() {
//   const [users, setUsers] = useState([]);

//   const usersChanged = (newUsers) => {
//     console.log(newUsers);
//     setUsers(newUsers);
//   };

//   useEffect(() => {
//     if (users.length === 0) {
//       firebaseIface.subscribeUsers(usersChanged);
//     }
//   });

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.text}>Users</Text>
//       <View>
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//         <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       </View>

//       <ScrollView horizontal={true}>
//         <FlatList
//           data={users}
//           renderItem={(user) => (
//             <Text style={{ color: "white" }}>
//               {[
//                 user.item.id,
//                 user.item.first,
//                 user.item.last,
//                 user.item.born
//               ].join(", ")}
//             </Text>
//           )}
//         />
//       </ScrollView>

//       <TextInput
//         style={{
//           height: 40,
//           borderColor: "gray",
//           padding: 12,
//           borderRadius: 5,
//           color: "white",
//           borderWidth: 1
//         }}
//         defaultValue="You can type in me"
//       />
//       <Pressable
//         style={styles.button}
//         onPress={() => alert("You pressed a button.")}
//       >
//         <Text style={styles.buttonLabel}>Press me</Text>
//       </Pressable>
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <Image source={PlaceholderImage} style={{ width: 50, height: 50 }} />
//       <StatusBar style="auto" />
//     </ScrollView>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#25292e",
    gap: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  storia: {
    fontSize: 32,
    color: "white",
    marginVertical: 10
  }
});
