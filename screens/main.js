import React, { Component } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Table, Row, Rows } from "react-native-table-component";

export default function MainScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Main Screeen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
});
