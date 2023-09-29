import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { Text, IconButton, Button } from "react-native-paper";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateParkingLotScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [nameInput, setnameInput] = useState("");
  const [totalParkingInput, settotalParkingInput] = useState("");
  const [descInput, setdescInput] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    toggleModal();
  };

  const openWebPage = () => {
    // Replace this URL with your documentation URL
    const url = "https://drive.google.com/file/d/1twDqTaibg9TJMElt-7pU_kMkKDff0DWy/view";

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

  // Data for the combo box (dropdown)
  const comboData = [
    { label: "INTEC", value: "INTEC" },
    { label: "UNPHU", value: "UNPHU" },
    { label: "PUCMM", value: "PUCMM" },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
        {/* Add your sidebar buttons here */}
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

      <View style={styles.mainContent}>
        <Text style={styles.title}>Create ParkingLot</Text>
        <Text style={styles.label}>Select an Organization:</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.comboButton}>
          <Text>{selectedValue ? selectedValue : "Select an Organization..."}</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setnameInput(text)}
          value={nameInput}
        />

        <Text style={styles.label}>Total Parking:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => settotalParkingInput(text)}
          value={totalParkingInput}
        />

        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setdescInput(text)}
          value={descInput}
        />

        <Modal animationType="slide" transparent={true} visible={isModalVisible}>
          <TouchableWithoutFeedback onPress={toggleModal}>
            <View style={styles.modalOverlay}></View>
          </TouchableWithoutFeedback>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select an option:</Text>
            {comboData.map((item) => (
              <TouchableOpacity
                key={item.value}
                style={styles.modalOption}
                onPress={() => handleOptionSelect(item.value)}
              >
                <Text>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </Modal>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
        >
          <Text style={styles.buttonText}>Add ParkingLot</Text>
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
    flex: 1,
    backgroundColor: "#AAA9E1", // Sidebar background color
    padding: 16,
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
    flex: 5, // Adjust the flex ratio as needed
    padding: 16,
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
});
