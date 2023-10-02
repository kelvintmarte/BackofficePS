import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Image } from "react-native";
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
          onPress={() => openWebPage()}>
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Text style={styles.title}>Create ParkingLot</Text>
        <Text style={styles.label}>Select an Organization:</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.comboButton}>
          <Text>
            {selectedValue ? selectedValue : "Select an Organization..."}
          </Text>
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

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => navigation.goBack()}>
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
    flex: 1,
    backgroundColor: "#cccccc", 
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
    flex: 5, 
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
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
});
