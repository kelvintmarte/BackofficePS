import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";
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
};

const chartConfig = {
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
};
export default function MainScreen({ navigation }) {
    return (
        <ScrollView
            contentContainerStyle={styles.container}
            showsVerticalScrollIndicator={false}
        >
            <Text style={styles.title}>Main Screeen</Text>
            {/* Line Chart */}
            <Text style={styles.chartTitle}>Organization Chart</Text>
            <View style={styles.chartContainer}>
                <LineChart
                    data={chartData}
                    width={400}
                    height={300}
                    chartConfig={chartConfig}
                />
            </View>

            {/* Bar Chart */}
            <Text style={styles.chartTitle}>Parking Chart</Text>
            <View style={styles.chartContainer}>
                <BarChart
                    data={chartData}
                    width={400}
                    height={300}
                    chartConfig={chartConfig}
                />
            </View>

            {/* Pie Chart */}
            <Text style={styles.chartTitle}>ParkingLot Chart</Text>
            <View style={styles.chartContainer}>
                <PieChart
                    data={[
                        {
                            name: "Parqueo subterraneo",
                            population: 20,
                            color: "rgba(0, 0, 255, 0.7)",
                        },
                        { name: "Parqueo Profesores", population: 45, color: "green" },
                        { name: "Parqueo Biblioteca", population: 28, color: "red" },
                        { name: "Torre De parqueo", population: 80, color: "yellow" },
                    ]}
                    width={350}
                    height={200}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                    absolute
                />
            </View>
            <Button onPress={() => navigation.navigate("Debug")}>Debug</Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingTop: 20,
    },
    mainTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    chartSection: {
        marginBottom: 20,
        alignItems: 'center',
    },
    chartContainer: {
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'white',
    },
    chartTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
