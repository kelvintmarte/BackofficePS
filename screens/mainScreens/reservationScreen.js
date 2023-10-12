import { React, useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table } from "react-native-table-component";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

export default function ReservationScreen() {
  const [isBooked, setIsBooked] = useState([]);
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [activeScreen, setActiveScreen] = useState("Parking");

  const fetchData = () => {
    axios.get("http://localhost:3000/parking").then((response) => {
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
    //   axios.get("http://localhost:3000/parking").then((response) => {
    //     console.log(response.data.body);
    //     setIsBooked(response.data.body);
    //   });
    // }, []);
    return (
      <View style={styles.tableContainer}>
        <View style={styles.tableHeader}>
          <Text style={styles.headerText}>Estacionamiento</Text>
          <Text style={styles.headerText}>Parqueo</Text>
          <Text style={styles.headerText}>Precio</Text>
        </View>
        {isBooked?.map((val, index) => (
          <View
            key={index}
            style={[
              styles.tableRow,
              index % 2 === 0 ? styles.evenRow : styles.oddRow,
            ]}
          >
            <Text style={styles.cellText}>{val.parkingLot.name}</Text>
            <Text style={styles.cellText}>{val.parking}</Text>
            <Text style={styles.cellText}>{val.basePrice}</Text>
          </View>
        ))}
      </View>
    );
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
          style={[
            styles.sidebarButton,
            activeScreen === "Parking" && styles.activeButton,
          ]}
          onPress={() => navigation.navigate("Reservation")}
        >
          <Text style={[
            styles.sidebarButtonText,
            activeScreen === "Parking" && styles.activeButtonText,
          ]}>Reservations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("ParkingLot")}
        >
          <Text style={styles.sidebarButtonText}>Parking Lots</Text>
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
        <Text style={styles.title}>Reservations</Text>
        <Table borderStyle={{ borderWidth: 1 }}>
          {/*<Row
            data={["Estacionamiento", "Parqueo", "Precio"]}
            style={styles.head}
  textStyle={[styles.text, { color: "white" }]}/>*/}
          {/* <Rows data={dataBody.body?.slice(1)} textStyle={styles.text} /> */}
          {renderTableData()}
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
          onPress={() => navigation.navigate("CreateParking")}
        >
          <Text style={styles.buttonText}>Add Reservation</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: "#FF4641",
              marginBottom: 10,
              alignSelf: "center",
            },
          ]}
          onPress={() => console.log("Delete button selected")}
        >
          <Text style={styles.buttonText}>Delete Parking</Text>
        </TouchableOpacity> */}
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
    height: "100%",
    position: "fixed",
    width: "250px",
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
    marginLeft: "250px"
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
