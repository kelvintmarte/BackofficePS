import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function parkingScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };

  const tableData = [
    ["Estacionamiento", "Parqueo", "Precio"],
    ["Parqueo Subterraneo", "1S", "150"],
  ];

  const getData = () => {
    const parkingUrl = "http://localhost:3000/parking";
    axios
      .get(parkingUrl)
      .then((response) => {
        const responseData = response.data;
        console.log("Data from the API:", responseData);
      })
      .catch((error) => {
        console.error("Error fetching data", error);
      });
  };

  return (
    <View style={styles.container}>

      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          style={styles.image}
          source={require("../assets/logo-no-background.png")}
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

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Parking</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={["Estacionamiento", "Parqueo", "Precio"]}
            style={styles.head}
            textStyle={[styles.text, { color: "white" }]}
          />
          <Rows data={tableData.slice(1)} textStyle={styles.text} />
        </Table>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#6563db",
              marginBottom: 10,
              marginTop: 10,
              alignSelf: "center",
            },
          ]}
          onPress={() => navigation.navigate("CreateParking")}>
          <Text style={styles.buttonText}>Add Parking</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#6563db",
              marginBottom: 10,
              alignSelf: "center",
            },
          ]}
          onPress={() => getData()}>
          <Text style={styles.buttonText}>Delete Parking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", // Use 'column' if you want a sidebar on top of main content
  },
  sidebar: {
    flex: 1,
    backgroundColor: "#cccccc", // Sidebar background color
    padding: 5,
  },
  sidebarButton: {
    marginBottom: 10,
    backgroundColor: "#fff", // Button background color
    padding: 10,
    borderRadius: 5,
  },
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  mainContent: {
    flex: 4, // Adjust the flex ratio as needed
    padding: 20,
  },
  head: { height: 40, backgroundColor: "#6563db" },
  text: { margin: 6, textAlign: "center" },
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
});
