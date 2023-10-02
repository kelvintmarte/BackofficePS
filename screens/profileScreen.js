import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Profile</Text>
            <Button onPress={() => navigation.navigate("Debug")}>
                Debug
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
