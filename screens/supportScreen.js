import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function supportScreen() {
    const navigation = useNavigation(); // Initialize navigation
    const handleLogout = () => {
        navigation.navigate("Starting");
    };
    const teamMembers = [
        {
            name: "Pablo Diaz",
            role: "Desarrollador BackEnd",
            email: "pablo.diaz@example.com",
            phone: "123-456-7890",
        },
        {
            name: "Mariano Vasquez",
            role: "Desarrollador FrontEnd",
            email: "mariano.vasquez@example.com",
            phone: "987-654-3210",
        },
        {
            name: "Diego Lobato",
            role: "Desarrollador FrontEnd/Project Manager",
            email: "diego.lobato@example.com",
            phone: "555-555-5555",
        },
        {
            name: "Kelvin Marte",
            role: "Desarrollador FrontEnd",
            email: "kelvintmarte@gmail.com",
            phone: "829-801-0270",
        },
    ];

    const businessLocation = "Instituto Tecnológico de Santo Domingo, Republica Dominicana";

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
                    style={styles.sidebarButton}
                    onPress={() => navigation.navigate("Documentation")}>
                    <Text style={styles.sidebarButtonText}>Documentation</Text>
                </TouchableOpacity>

                {/* Log Out Button */}
                <TouchableOpacity
                    style={[styles.sidebarButton, { backgroundColor: '#FF4641' }]}
                    onPress={handleLogout}>
                    <Text style={styles.sidebarButtonText}>Log Out</Text>
                </TouchableOpacity>

            </View>

            {/* Main content */}
            <View style={styles.mainContent}>
                <Text style={styles.title}>Contact Support</Text>

                <View style={styles.teamInfo}>
                    <View style={styles.teamMembers}>
                        <Text style={styles.teamTitle}>Team Members</Text>
                        {teamMembers.map((member, index) => (
                            <View key={index} style={styles.teamMember}>
                                <Text>Name: {member.name}</Text>
                                <Text>Role: {member.role}</Text>
                                <Text>Email: {member.email}</Text>
                                <Text>Phone: {member.phone}</Text>
                            </View>
                        ))}
                    </View>

                    <View style={styles.businessLocation}>
                        <Text style={styles.locationTitle}>Business Location</Text>
                        <Text>{businessLocation}</Text>
                    </View>
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
    mainContent: {
        flex: 4, // Adjust the flex ratio as needed
        padding: 20,
        marginLeft: "250px"
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
    teamInfo: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    teamMembers: {
        flex: 1,
        marginRight: 10,
    },
    teamTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
    teamMember: {
        marginBottom: 15,
    },
    businessLocation: {
        flex: 1,
    },
    locationTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 10,
    },
});
