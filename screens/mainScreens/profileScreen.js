import React,{useState} from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
    const navigation = useNavigation(); // Initialize navigation
    const [activeScreen, setActiveScreen] = useState("ParkingLot");
    const handleLogout = () => {
      navigation.navigate("Starting");
    };
    const handleNavigateToSupport = () => {
        navigation.navigate("Support");
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
          onPress={() => navigation.navigate("Reservation")}
        >
          <Text style={styles.sidebarButtonText}>Reservations</Text>
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

        {/* Main Content */}
        <View style={styles.content}>
            <Image source={require("../../assets/user.png")} style={styles.profilePicture} />
            <Text style={styles.name}>FristName: Diego</Text>
            <Text style={styles.lastName}>LastName: Lobato</Text>
            <Text style={styles.lastName}>Email: seeunever420@gmail.com</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#cccccc',
    padding: 10,
  },
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
  sidebarButton: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 18,
    color: 'gray',
  },
});
