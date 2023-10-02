import React from "react";
import { Text, View, StyleSheet, Linking, Image } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { BarChart, LineChart, PieChart } from "react-native-chart-kit";

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

export default function MainScreen({ navigation }) {
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
          onPress={() => navigation.navigate("Dashboard")}>
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
          onPress={() => navigation.navigate("Documentation")}>
          <Text style={styles.sidebarButtonText}>Documentation</Text>
        </TouchableOpacity>


      </View>

      {/* Main content */}
      <ScrollView
        contentContainerStyle={styles.mainContent}
        showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Dashboard</Text>
        {/* Line Chart */}
        <Text style={styles.chartTitle}>Organization</Text>
        <View style={styles.chartContainer}>
          <LineChart
            data={chartData}
            width={500}
            height={300}
            chartConfig={chartConfig}
          />
        </View>

        {/* Bar Chart */}
        <Text style={styles.chartTitle}>Parking</Text>
        <View style={styles.chartContainer}>
          <BarChart
            data={chartData}
            width={500}
            height={300}
            chartConfig={chartConfig}
          />
        </View>

        {/* Pie Chart */}
        <Text style={styles.chartTitle}>ParkingLot</Text>
        <View style={styles.chartContainer}>
          <PieChart
            data={[
              {
                name: "Parqueo subterraneo",
                population: 20,
                color: "rgba(0, 0, 255, 0.7)",
              },
              { name: "Parqueo Profesores", population: 45, color: "rgba(170, 169, 225, 88)" },
              { name: "Parqueo Biblioteca", population: 28, color: "rgba(101, 99, 219, 86)" },
              { name: "Torre De parqueo", population: 80, color: "rgba(42, 41, 92, 36)" },
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  sidebar: {
    flex: 0.5,
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
    flex: 4,
    padding: 20,
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
});
