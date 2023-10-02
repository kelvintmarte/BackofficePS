import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Linking, Alert
} from "react-native";

const DocumentationScreen = ({ navigation }) => {

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
  return (
    <View style={styles.container}>
      {/* Sidebar */}
      <View style={styles.sidebar}>
        <Image
          style={styles.image}
          source={require("../assets/logo-no-background.png")}
        />
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
          onPress={() => navigation.navigate("Documentation")}
        >
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Documentation</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              UserManual();
            }}
          >
            <Text style={styles.buttonText}>User Manual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              TechnicalManual();
            }}
          >
            <Text style={styles.buttonText}>Technical Manual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              ImplementationManual();
            }}
          >
            <Text style={styles.buttonText}>Implementation manual</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Configuration")
            }}
          >
            <Text style={styles.buttonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    flex: 0.2, // Adjust the width of the sidebar as needed
    backgroundColor: "#cccccc", // Sidebar background color
    padding: 20,
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
    flex: 0.7, // Adjust the width of the main content area as needed
    padding: 20,
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
    flex: 1, // Occupy the available space on the right
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
  },
});

export default DocumentationScreen;
