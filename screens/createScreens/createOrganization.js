import { React, useState } from "react";
import { Text, View, StyleSheet, Button, TextInput } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateOrganizationScreen({ navigation }) {
  const [orgInput, setorgInput] = useState("");
  const [ownerInput, setownerInput] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Organization</Text>
      <Text style={styles.label}>Organization Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setorgInput(text)}
        value={orgInput}
        placeholder="Enter text..."
      />

      <Text style={styles.label}>Organization Owner:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setownerInput(text)}
        value={ownerInput}
        placeholder="Enter text..."
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => navigation.navigate("Parking")}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}>
          <Text style={styles.buttonText}>Add Organization</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={() => navigation.navigate("Debug")}>Debug</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    fullWidth: true,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
