import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ParkingLotScreen() {
  const [isBooked, setIsBooked] = useState([]);
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [activeScreen, setActiveScreen] = useState("ParkingLot");

  const fetchData = () => {
    axios.get("http://localhost:3000/parking-lot").then((response) => {
      console.log(response.data.body);
      setIsBooked(response.data.body);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetchData();
    }, 30000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const renderTableData = () => {
    // useEffect(() => {
    //   axios.get("http://localhost:3000/parking-lot").then((response) => {
    //     console.log(response.data.body);
    //     setIsBooked(response.data.body);
    //   });
    // }, []);
    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Name</Text>
          <Text style={styles.headerText}>Total Parking</Text>
          <Text style={styles.headerText}>Description</Text>
        </View>
        {isBooked?.map((val, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}
          >
            <Text style={styles.cellText}>{val.name}</Text>
            <Text style={styles.cellText}>{val.totalParking}</Text>
            <Text style={styles.cellText}>{val.description}</Text>
          </View>
        ))}
      </View>
    );
  }

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
          style={[
            styles.sidebarButton,
            activeScreen === "ParkingLot" && styles.activeButton,
          ]}
          onPress={() => navigation.navigate("ParkingLot")}
        >
          <Text style={[
            styles.sidebarButtonText,
            activeScreen === "ParkingLot" && styles.activeButtonText,
          ]}>Parking Lots</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Organization")}
        >
          <Text style={styles.sidebarButtonText}>Organization</Text>
        </TouchableOpacity> */}

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

        {/* Log Out Button */}
        <TouchableOpacity
          style={[styles.sidebarButton, { backgroundColor: "#FF4641" }]}
          onPress={handleLogout}
        >
          <Text style={styles.sidebarButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Parking Lot</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          {renderTableData()}
          {/* <Row
            data={["Organization", "Name", "Total Parking", "Description"]}
            style={styles.head}
            textStyle={[styles.text, { color: "white" }]}
          />
          <Rows data={tableData.slice(1)} textStyle={styles.text} /> */}
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
          onPress={() => navigation.navigate("CreateParkingLot")}
        >
          <Text style={styles.buttonText}>Add Parking Lot</Text>
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
          <Text style={styles.buttonText}>Delete Parking Lot</Text>
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
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
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
    textAlign: "left",
    fontWeight: "bold",
  },
  head: {
    height: 40,
    backgroundColor: "#6563db",
    textAlign: "center",
    color: "#fff",
    fontFamily: "Arial",
  },
  text: {
    margin: 10,
    textAlign: "center",
    fontFamily: "Arial",
  },
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
  activeButton: {
    backgroundColor: "#6563db",
  },
  activeButtonText: {
    color: "lightgray",
  },

  tableContainer: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 5,
    backgroundColor: "white",
    marginTop: 10,
    padding: 10,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingBottom: 5,
    marginBottom: 5,
  },
  headerText: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  evenRow: {
    backgroundColor: "#f2f2f2",
  },
  oddRow: {
    backgroundColor: "#fff",
  },
  cellText: {
    flex: 1,
    textAlign: "center",
    fontSize: 14,
  },
});
