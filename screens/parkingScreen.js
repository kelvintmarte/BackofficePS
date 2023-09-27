import React, { Component } from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";

export default function parkingScreen({ navigation }) {
  const tableData = [
    ["Estacionamiento", "Parqueo", "Precio"],
    ["Parqueo Subterraneo", "1S", "150"],
  ];

  const openWebPage = () => {
    const url = "https://drive.google.com/file/d/1twDqTaibg9TJMElt-7pU_kMkKDff0DWy/view"

    Linking.openURL(url)
      .then((result) => {
        if (result) {
          console.log("OK");
        } else {
          console.log("Error");
        }
      }).catch((error) => {
        console.error("An error ocurred: ", error);
      });
  };
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Main")}
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
        <Text style={styles.title}>Parking</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={["Estacionamiento", "Parqueo", "Precio"]}
            style={styles.head}
            textStyle={[styles.text, { color: "white" }]}
          />
          <Rows data={tableData.slice(1)} textStyle={styles.text} />
        </Table>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6563db" }]}
            onPress={() => navigation.navigate("CreateParking")}
          >
            <Text style={styles.buttonText}>Add Parking</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "#6563db" }]}
            onPress={() => console.log("Delete Button pressed")}
          >
            <Text style={styles.buttonText}>Delete Parking Lot</Text>
          </TouchableOpacity>
        </View>
        <Button onPress={() => navigation.navigate("Debug")}>Debug</Button>
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
    backgroundColor: "#AAA9E1", // Sidebar background color
    padding: 5,
  },
  sidebarButton: {
    marginBottom: 10,
    backgroundColor: "#fff", // Button background color
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
  },
  head: { height: 40, backgroundColor: "#6563db" },
  text: { margin: 6, textAlign: "center" },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
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
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
});