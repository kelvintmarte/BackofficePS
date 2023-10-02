import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Linking,
  Image,
  TextInput,
} from "react-native";

export default function CreateParkingScreen({ route, navigation }) {
  const [parkinglot, setParkinglot] = React.useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [parkingInput, setparkingInput] = useState("");
  const [priceInput, setpriceInput] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  useEffect(() => {
    // GetParkingLotData();
  }, []);

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
  // const GetParkingLotData = () => {
  //   const axiosUrl = "http://localhost:3000/parking-lot";
  //   console.log(axiosUrl);
  //   axios.get(axiosUrl, { withCredentials: true }).then((response) => {
  //     const newParkinglotList = [];
  //     response.data.body
  //       .forEach((parkinglot) => {
  //         newParkinglotList.push({
  //           value: parkinglot._id,
  //           label: parkinglot.name,
  //         });
  //         setParkinglot(newParkinglotList);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   });
  // };

  const handleOptionSelect = (value) => {
    setSelectedValue(value);
    toggleModal();
  };

  const comboData = [
    { label: "Parqueo Subterraneo", value: "Parqueo Subterraneo" },
    { label: "Parqueo Profesores", value: "Parqueo Profesores" },
    { label: "Parqueo Biblioteca", value: "Parqueo Biblioteca" },
  ];

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
        <Text style={styles.title}>Create Parking</Text>
        <Text style={styles.label}>Select ParkingLot:</Text>
        <TouchableOpacity onPress={toggleModal} style={styles.comboButton}>
          <Text>
            {selectedValue ? selectedValue : "Select a Parkinglot..."}
          </Text>
        </TouchableOpacity>

        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={parkingInput} />

        <Text style={styles.label}>Total Parking:</Text>
        <TextInput style={styles.input} value={priceInput} />

        {/* <Modal animationType="slide" transparent={true} visible={isModalVisible}>
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
        </Modal> */}

        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}>
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
    backgroundColor: "#cccccc", // Sidebar background color
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
