import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TextInput,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function CreateParking() {
  const [isBooked, setIsBooked] = useState([]);
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [parkingLot, setParkingLot] = useState("");
  const [parking, setparkingInput] = useState("");
  const [basePrice, setpriceInput] = useState(0.0);

  const [parkingError, setParkingError] = useState("");
  const [priceError, setPriceError] = useState("");

  const addParking = async () => {
    setPriceError("");
    setParkingError("");

    if (!parking) {
      setParkingError("Parking is required");
      return;
    }

    if (isNaN(basePrice)) {
      setPriceError("Price must be a valid number");
      return;
    }

    try {
      const url = "http://localhost:3000/parking";
      const response = await axios.post(url, {
        parkingLot,
        parking,
        basePrice,
      });
      console.log("Post response:", response.data);
      navigation.navigate("Parking");
    } catch (error) {
      console.error("error posting data:", error);
    }
  };

  const handleChange = (e) => {
    setParkingLot(e.target.value);
  };

  const renderSelectData = () => {
    useEffect(() => {
      axios.get("http://localhost:3000/parking-lot").then((response) => {
        console.log(response.data.body);
        setIsBooked(response.data.body);
      });
    }, []);
    return (
      <select
        className="select-board-size"
        style={styles.input}
        onChange={handleChange}
      >
        {isBooked?.map((val) => (
          <option value={val._id}>{val.name}</option>
        ))}
      </select>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {/* Add your sidebar buttons here */}
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
          onPress={() => navigation.navigate("Reservation")}
        >
          <Text style={styles.sidebarButtonText}>Reservations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("ParkingLot")}
        >
          <Text style={styles.sidebarButtonText}>Parking Lots</Text>
        </TouchableOpacity>
        {/* 
        <TouchableOpacity
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

      <View style={styles.mainContent}>
        <Text style={styles.title}>Create Parking</Text>
        <Text style={styles.label}>Select ParkingLot:</Text>
        {/* <TextInput
          style={styles.input}
          onChangeText={(text) => setParkingLot(text)}
        /> */}
        {renderSelectData()}
        {/* <TouchableOpacity style={styles.comboButton}>
          <Text>
            {selectedValue ? selectedValue : "Select a Parkinglot..."}
          </Text>
        </TouchableOpacity> */}

        <Text style={styles.label}>Parking:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setparkingInput(text);
            setParkingError("");
          }}
        />
        {parkingError ? (
          <Text style={styles.errorText}>{parkingError}</Text>
        ) : null}
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            setpriceInput(parseFloat(text));
            setPriceError("");
          }}
        />
        {priceError ? <Text style={styles.errorText}>{priceError}</Text> : null}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => addParking()}
        >
          <Text style={styles.buttonText}>Add Parking</Text>
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
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 8,
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
    marginLeft: "250px",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "left",
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
    borderRadius: 10, // Add rounded border
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
});
