import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [fristName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userProfile, setUserProfile] = useState(null);
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [activeScreen, setActiveScreen] = useState("Configuration");

  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  const toggleLanguage = () => {
    console.log("Language change");
  };

  useEffect(() => {
    const url = "http://localhost:3000/user-moderator";

    const fectchData = async () => {
      try {
        const response = await axios.get(url);

        if (response.status === 200) {
          console.log(response.data);
          // setUserProfile(response.data);
        } else {
          console.error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fectchData();
  }, []);

  if (!userProfile) {
    return <Text>Loading...</Text>;
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
          onPress={() => navigation.navigate("Dashboard")}>
          <Text style={styles.sidebarButtonText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Reservation")}>
          <Text style={styles.sidebarButtonText}>Reservations</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("ParkingLot")}>
          <Text style={styles.sidebarButtonText}>Parking Lots</Text>
        </TouchableOpacity>

        {/* <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Organization")}
        >
          <Text style={styles.sidebarButtonText}>Organization</Text>
        </TouchableOpacity> */}

        <TouchableOpacity
          style={[
            styles.sidebarButton,
            activeScreen === "Configuration" && styles.activeButton,
          ]}
          onPress={() => navigation.navigate("Configuration")}>
          <Text
            style={[
              styles.sidebarButtonText,
              activeScreen === "Configuration" && styles.activeButtonText,
            ]}>
            Configuration
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.sidebarButton}
          onPress={() => navigation.navigate("Documentation")}>
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>

        {/* Log Out Button */}
        <TouchableOpacity
          style={[styles.sidebarButton, { backgroundColor: "#FF4641" }]}
          onPress={handleLogout}>
          <Text style={styles.sidebarButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.mainContent}>
        <Text>Profile</Text>
        <Image source={require("../assets/user.png")} />
        <Text style={styles.name}>name</Text>
        <Text style={styles.name}>lastname</Text>
        <Text style={styles.name}>email</Text>
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
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "left",
    fontWeight: "bold",
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
});
