import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Linking,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import axios from "axios";

export default function CreateOrganizationScreen({ navigation }) {
  const [organizationName, setorganizationName] = useState("");
  const [organizationOwner, setorganizationOwner] = useState("");

  const openWebPage = () => {
    // Replace this URL with your documentation URL
    const url =
      "https://drive.google.com/file/d/1twDqTaibg9TJMElt-7pU_kMkKDff0DWy/view";

    // Open the URL in the device's browser
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

  const addOrganization = async () => {
    try {
      const url = "http://localhost:3000/organization";
      const response = await axios.post(url, {
        organizationName,
        organizationOwner,
        latitude: 18.48741740674596,
        longitude: -69.93955729562215,
        latitudeDelta: 0.000922,
        longitudeDelta: 0.000421,
      });
      console.log("Post response:", response.data);
      navigation.goBack();
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          style={styles.image}
          source={require("../../assets/logo-no-background.png")}
        />
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text style={styles.sidebarButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Parking")}
        >
          <Text style={styles.sidebarButtonText}>Parkings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("ParkingLot")}
        >
          <Text style={styles.sidebarButtonText}>Parking Lots</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Organization")}
        >
          <Text style={styles.sidebarButtonText}>Organization</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Configuration")}
        >
          <Text style={styles.sidebarButtonText}>Configuration</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => openWebPage()}
        >
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Create Organization</Text>
        <Text style={styles.label}>Organization Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setorganizationName(text)}
          value={organizationName}
          placeholder="Enter text here..."
        />

        <Text style={styles.label}>Organization Owner:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setorganizationOwner(text)}
          value={organizationOwner}
          placeholder="Enter text here..."
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => addOrganization()}
        >
          <Text style={styles.buttonText}>Add Organization</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Sidebar on the left, content on the right
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
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    backgroundColor: "#6563db",
    fontWeight: "bold",
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
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
