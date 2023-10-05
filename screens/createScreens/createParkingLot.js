import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

export default function CreateParkingLot() {
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [totalParking, setTotalParking] = useState("");
  const [description, setDescription] = useState("");

  const openWebPage = () => {
    const url =
      "https://drive.google.com/file/d/1twDqTaibg9TJMElt-7pU_kMkKDff0DWy/view";

    Linking.openURL(url)
      .then((result) => {
        if (result) {
          console.log("OK");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("An error occurred: ", error);
      });
  };

  const addParkingLot = async () => {
    try {
      const url = "http://localhost:3000/parking-lot"
      const data = {
        organization: "64ebb69eca4ddc8ccafb0120",
        name,
        totalParking,
        description,
        latitude: 18.483006257009542,
        longitude: -69.93890390277178
      };
      const response = await axios.post(url, data)
      console.log("POST response:", response.data);
      navigation.navigate("ParkingLot")
    } catch (error) {
      console.error("Error posting data:", error);
      navigation.navigate("ParkingLot")
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-no-background.png")}
        />
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Main")}>
          <Text style={styles.sidebarButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Parking")}>
          <Text style={styles.sidebarButtonText}>Parkings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("ParkingLot")}>
          <Text style={styles.sidebarButtonText}>Parking Lots</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Organization")}>
          <Text style={styles.sidebarButtonText}>Organization</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Configuration")}>
          <Text style={styles.sidebarButtonText}>Configuration</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Documentation")}>
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>

        {/* Log Out Button */}
        <TouchableOpacity
          style={[styles.sidebarButton, { backgroundColor: '#FF4641' }]}
          onPress={handleLogout}>
          <Text style={styles.sidebarButtonText}>Log Out</Text>
        </TouchableOpacity>

      </View>

      <View style={styles.mainContent}>
        <Text style={styles.title}>Create ParkingLot</Text>
        <Text style={styles.label}>Select an Organization:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setOrganization(text)}
        />

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setName(text)}
        />

        <Text style={styles.label}>Total Parking:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTotalParking(text)}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setDescription(text)}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => addParkingLot()}>
          <Text style={styles.buttonText}>Add ParkingLot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    height: "100%",
    position: "fixed",
    width: "250px",
    flex: 1,
    backgroundColor: "#cccccc", // Sidebar background color
    padding: 5,
  },
  sidebarButton: {
    marginBottom: 10,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContent: {
    flex: 4, // Adjust the flex ratio as needed
    padding: 20,
    marginLeft: "250px"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
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
  comboButton: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: "center",
    paddingLeft: 8,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "#6563db",
    fontWeight: "bold",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  modalTitle: {
    fontSize: 18,
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  modalOption: {
    padding: 16,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
});
