import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";
import axios from "axios";

export default function OrganizationScreen({ navigation }) {
  const tableData = [
    ["Organization Name", "Direccion"],
    ["INTEC", "Av. de Los Próceres 49, Santo Domingo 10602"],
    ["PUCMM", "Abraham Lincoln esq. Simón Bolívar"],
    ["UNPHU", "Av. John F. Kennedy 1/2, Santo Domingo"],
  ];

  const getData = () => {
    const parkingUrl = "http://localhost:3000/organization/all";
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
          onPress={() => navigation.navigate("Documentation")}
        >
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Organization</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          <Row
            data={["Organization Name", "Direccion"]}
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
              alignSelf: "center",
              marginTop: 10,
            },
          ]}
          onPress={() => navigation.navigate("CreateOrganization")}
        >
          <Text style={styles.buttonText}>Add Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#FF4641",
              marginBottom: 10,
              alignSelf: "center",
            },
          ]}
          onPress={() => getData()}
        >
          <Text style={styles.buttonText}>Delete Organization</Text>
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
    marginLeft: "250px"
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "left",
    fontWeight: "bold",
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
});
