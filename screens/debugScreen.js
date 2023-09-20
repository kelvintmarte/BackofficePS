import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Button } from "react-native-paper";

export default function DebugScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Button
                style={styles.button}
                icon="send"
                mode="contained"
                onPress={() => navigation.navigate("Login")}
                width="80%"
            >
                Log in
            </Button>
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
                onPress={() => navigation.navigate("Main")}
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
