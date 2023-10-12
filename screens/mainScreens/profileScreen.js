import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function ProfileScreen() {
    const navigation = useNavigation(); // Initialize navigation

    const handleNavigateToSupport = () => {
        navigation.navigate("Support");
    }

    return (
      <View style={styles.container}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
            <TouchableOpacity
                style={styles.sidebarButton}
                onPress={handleNavigateToSupport}
            >
                <Text style={styles.sidebarButtonText}>Support</Text>
            </TouchableOpacity>
        </View>

        {/* Main Content */}
        <View style={styles.content}>
            <Image source={require("../../assets/user.png")} style={styles.profilePicture} />
            <Text style={styles.name}>Name</Text>
            <Text style={styles.lastName}>LastName</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebar: {
    width: 250,
    backgroundColor: '#cccccc',
    padding: 10,
  },
  sidebarButton: {
    marginBottom: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  sidebarButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  lastName: {
    fontSize: 18,
    color: 'gray',
  },
});
