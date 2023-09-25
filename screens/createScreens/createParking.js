import { React, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CreateParkingScreen({ navigation }) {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [parkingInput, setparkingInput] = useState("");
  const [priceInput, setpriceInput] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

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
      <Text style={styles.title}>Add Parking</Text>
      <Text style={styles.label}>Select an option:</Text>
      <TouchableOpacity onPress={toggleModal} style={styles.comboButton}>
        <Text>{selectedValue ? selectedValue : "Select an option..."}</Text>
      </TouchableOpacity>

      <Text style={styles.label}>Parking:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setparkingInput(text)}
        value={parkingInput}
      />

      <Text style={styles.label}>Base Price:</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setpriceInput(text)}
        value={priceInput}
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
              onPress={() => handleOptionSelect(item.value)}>
              <Text>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => navigation.navigate("Parking")}>
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}>
          <Text style={styles.buttonText}>Add Parking</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    paddingVertical: 10,
    fullWidth: true,
    width: "100%",
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
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
