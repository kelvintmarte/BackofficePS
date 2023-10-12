import { React, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function documentationScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [activeScreen, setActiveScreen] = useState("Documentation");

  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
  };

  const UserManual = () => {
    const manualuserURL =
      "https://drive.google.com/file/d/1twDqTaibg9TJMElt-7pU_kMkKDff0DWy/view";

    Linking.openURL(manualuserURL)
      .then((result) => {
        if (result) {
          console.log("Open Manual user");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("An error ocurred: ", error);
      });
  };

  const TechnicalManual = () => {
    const tecnincalmanualURL =
      "https://drive.google.com/file/d/1xetTxovy332o58no989XXMG4opNDVX-1/view?usp=drive_link";

    Linking.openURL(tecnincalmanualURL)
      .then((result) => {
        if (result) {
          console.log("Open Technical Manual");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("An error ocurred: ", error);
      });
  };

  const ImplementationManual = () => {
    const implementmanualURL =
      "https://drive.google.com/file/d/1bV3NbQ0FP7XQSs-i8EXyFMKU2iFsTsBV/view?usp=drive_link";

    Linking.openURL(implementmanualURL)
      .then((result) => {
        if (result) {
          console.log("Open Implementation manual");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("An error ocurred: ", error);
      });
  };
  const Coda = () => {
    const codaUrl =
      "https://coda.io/d/Parking-Spot_d6cYox1V22X/Parking-Spot_suxKP#_luqBB";

    Linking.openURL(codaUrl)
      .then((result) => {
        if (result) {
          console.log("Open Coda");
        } else {
          console.log("Error");
        }
      })
      .catch((error) => {
        console.error("An error ocurred: ", error);
      });
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
          style={[
            styles.sidebarButton,
            activeScreen === "Documentation" && styles.activeButton,
          ]}
          onPress={() => navigation.navigate("Documentation")}
        >
          <Text
            style={[
              styles.sidebarButtonText,
              activeScreen === "Documentation" && styles.activeButtonText,
            ]}
          >
            Documentation
          </Text>
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
        <Text style={styles.title}>Documentation</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
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
            onPress={() => {
              UserManual();
            }}
          >
            <Text style={styles.buttonText}>User Manual</Text>
          </TouchableOpacity>

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
            onPress={() => {
              TechnicalManual();
            }}
          >
            <Text style={styles.buttonText}>Technical Manual</Text>
          </TouchableOpacity>

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
            onPress={() => {
              ImplementationManual();
            }}
          >
            <Text style={styles.buttonText}>Implementation manual</Text>
          </TouchableOpacity>

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
            onPress={() => {
              Coda();
            }}
          >
            <Text style={styles.buttonText}>Coda</Text>
          </TouchableOpacity>

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
            onPress={() => {
              navigation.navigate("Support");
            }}
          >
            <Text style={styles.buttonText}>Contact Support</Text>
          </TouchableOpacity>
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
  image: {
    marginBottom: 40,
    height: "20%",
    width: "95%",
    resizeMode: "contain",
  },
  mainContent: {
    flex: 4, // Adjust the flex ratio as needed
    padding: 20,
    marginLeft: "250px",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "left",
  },
  // Add additional styles for the button container
  buttonContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 2, // Occupy the available space on the right
  },

  // Add additional styles for the buttons
  button: {
    backgroundColor: "#C5D4F4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 10, // Adjust spacing between buttons
    width: "80%", // Set the button width
  },

  // Add additional styles for the button text
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    color: "#fff",
  },
  activeButton: {
    backgroundColor: "#6563db",
  },
  activeButtonText: {
    color: "lightgray",
  },
});
