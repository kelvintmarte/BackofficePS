import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";

export default function OrganizationScreen({ navigation }) {
  const tableData = [
    ["Organization Name", "Direccion"],
    ["INTEC", "Av. de Los Próceres 49, Santo Domingo 10602"],
    ["PUCMM", "Abraham Lincoln esq. Simón Bolívar"],
    ["UNPHU", "Av. John F. Kennedy 1/2, Santo Domingo"],
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Organization</Text>
      <Table borderStyle={{ borderWidth: 1 }}>
        <Row
          data={["Organization Name", "Direccion"]}
          style={styles.head}
          textStyle={[styles.text, { color: "white" }]}
        />
        <Rows data={tableData.slice(1)} textStyle={styles.text} />
      </Table>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => navigation.navigate("CreateOrganization")}>
          <Text style={styles.buttonText}>Add Organization</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: "#6563db" }]}
          onPress={() => console.log("Delete Button pressed")}>
          <Text style={styles.buttonText}>Delete Organization</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={() => navigation.navigate("Debug")}>Debug</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
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
