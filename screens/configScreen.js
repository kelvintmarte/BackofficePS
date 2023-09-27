import React from "react";
import { Text, View, StyleSheet, Button, Linking } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function ConfigScreen({ navigation }) {
  // Define team member information
  const teamMembers = [
    {
      name: "Pablo Diaz",
      role: "Desarrollador BackEnd",
      email: "pablo.diaz@example.com",
      phone: "123-456-7890",
    },
    {
      name: "Mariano Vasquez",
      role: "Desarrollador FrontEnd",
      email: "mariano.vasquez@example.com",
      phone: "987-654-3210",
    },
    {
      name: "Diego Lobato",
      role: "Desarrollador FrontEnd/Project Manager",
      email: "diego.lobato@example.com",
      phone: "555-555-5555",
    },
    {
      name: "Kelvin Marte",
      role: "Desarrollador FrontEnd",
      email: "kelvintmarte@gmail.com",
      phone: "829-801-0270",
    },
  ];

  // Define business location
  const businessLocation = "Instituto Tecnológico de Santo Domingo, Republica Dominicana";

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
        <Text style={styles.title}>Configuration</Text>

        {/* Team Information */}
        <View style={styles.teamInfo}>
          <View style={styles.teamMembers}>
            <Text style={styles.teamTitle}>Team Members</Text>
            {teamMembers.map((member, index) => (
              <View key={index} style={styles.teamMember}>
                <Text>Name: {member.name}</Text>
                <Text>Role: {member.role}</Text>
                <Text>Email: {member.email}</Text>
                <Text>Phone: {member.phone}</Text>
              </View>
            ))}
          </View>

          {/* Business Location */}
          <View style={styles.businessLocation}>
            <Text style={styles.locationTitle}>Business Location</Text>
            <Text>{businessLocation}</Text>
          </View>
        </View>
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
    backgroundColor: "#AAA9E1", // Sidebar background color
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
    flex: 4,
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  teamInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  teamMembers: {
    flex: 1,
    marginRight: 10,
  },
  teamTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  teamMember: {
    marginBottom: 15,
  },
  businessLocation: {
    flex: 1,
  },
  locationTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
