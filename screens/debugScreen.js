import React from "react";
import { StyleSheet, View } from "react-native";
import { Button } from "react-native-paper";

export default function DebugScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("ParkingLot")}
                width="80%"
            >
                parkingLot
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Dashboard")}
                width="80%"
            >
                Main
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Starting")}
                width="80%"
            >
                startingScreen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Parking")}
                width="80%"
            >
                Parking Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Organization")}
                width="80%"
            >
                Organization Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("CreateParking")}
                width="80%"
            >
                Create Parking Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("CreateParkingLot")}
                width="80%"
            >
                Create Parkinglot Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("CreateOrganization")}
                width="80%"
            >
                Create Organization Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Configuration")}
                width="80%"
            >
                Config Screen
            </Button>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Documentation")}
                width="80%"
            >
                Documentation
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        marginBottom: 40,
        height: "20%",
        width: "95%",
        resizeMode: "contain",
    },
    button: {
        marginTop: 25,
        fullWidth: true,
        width: "70%",
    },
});
