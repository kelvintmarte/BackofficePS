import { React, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { BarChart, PieChart } from "react-native-chart-kit";
import { useNavigation } from "@react-navigation/native";

const chartData = {
  labels: [
    "Parqueo subterraneo",
    "Parqueo Profesores",
    "Parqueo Biblioteca",
    "Torre De parqueo",
  ],
  datasets: [
    {
      data: [20, 45, 28, 80],
    },
  ],
  labels: [
    "Parqueo subterraneo",
    "Parqueo Profesores",
    "Parqueo Biblioteca",
    "Torre De parqueo",
  ],
  datasets: [
    {
      data: [20, 45, 28, 80],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
  backgroundGradientFrom: "white",
  backgroundGradientTo: "white",
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  strokeWidth: 2,
};

export default function DashboardScreen() {
  const navigation = useNavigation(); // Initialize navigation
  const handleLogout = () => {
    navigation.navigate("Starting");
  };
  const [activeScreen, setActiveScreen] = useState("Dashboard");

  const navigateToScreen = (screenName) => {
    setActiveScreen(screenName);
    navigation.navigate(screenName);
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
          style={[
            styles.sidebarButton,
            activeScreen === "Dashboard" && styles.activeButton,
          ]}
          onPress={() => navigation.navigate("Dashboard")}
        >
          <Text
            style={[
              styles.sidebarButtonText,
              activeScreen === "Dashboard" && styles.activeButtonText,
            ]}
          >
            Dashboard
          </Text>
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

        <TouchableOpacity
          style={[styles.sidebarButton, { backgroundColor: "#FF4641" }]}
          onPress={handleLogout}
        >
          <Text style={styles.sidebarButtonText}>Log Out</Text>
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.mainContent}>
        <Text style={styles.title}>Dashboard</Text>

        {/* Bar Chart */}
        <Text style={styles.chartTitle}>ParkingLot</Text>
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={500}
            height={300}
            chartConfig={chartConfig}
          />
        </View>

        {/* Pie Chart */}
        <Text style={styles.chartTitle}>Parking</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={[
              {
                name: "Occupied",
                population: 20,
                color: "red",
              },
              {
                name: "Available",
                population: 45,
                color: "green",
              },
            ]}
            width={500}
            height={300}
            chartConfig={chartConfig}
            accessor="population"
            backgroundColor="transparent"
            paddingLeft="15"
            absolute
          />
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
  chartTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  chartContainer: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    marginBottom: 20,
    alignItems: "center",
  },
  // Button styles
  buttonContainer: {
    alignItems: "center",
  },
  button: {
    backgroundColor: "#C5D4F4",
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  activeButton: {
    backgroundColor: "#6563db",
  },
  activeButtonText: {
    color: "lightgray",
  },
});
