import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function profileScreen() {
    // const { name, lastName, profilePicture } = route.params;
  
    return (
      <View style={styles.container}>
        <Image source={require("../../assets/user.png")} style={styles.profilePicture} />
        <Text style={styles.name}>name</Text>
        <Text style={styles.lastName}>lastName</Text>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
