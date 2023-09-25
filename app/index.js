import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Stack, useRouter } from 'expo-router';
import LoginScreen from '../screens/loginScreen.js';
import RegisterScreen from '../screens/registerScreen.js';
import StartingScreen from '../screens/startingScreen.js';
import MainScreen from '../screens/main.js';
import ParkingLotScreen from '../screens/parkinglotScreen.js';
import DebugScreen from '../screens/debugScreen.js';
import ParkingScreen from '../screens/parkingScreen.js';
import OrganizationScreen from '../screens/organizationScreen.js';
import CreateOrganizationScreen from '../screens/createScreens/createOrganization.js';
import CreateParkingScreen from '../screens/createScreens/createParking.js';
import CreateParkingLotScreen from '../screens/createScreens/createParkingLot.js';
import ConfigScreen from '../screens/configScreen.js';

const App = () => {
    const router = useRouter();
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Starting" component={StartingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Register" component={RegisterScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="ParkingLot" component={ParkingLotScreen} />
                <Stack.Screen name="Debug" component={DebugScreen} />
                <Stack.Screen name="Parking" component={ParkingScreen} />
                <Stack.Screen name="Organization" component={OrganizationScreen} />
                <Stack.Screen name="CreateOrganization" component={CreateOrganizationScreen} />
                <Stack.Screen name="CreateParking" component={CreateParkingScreen} />
                <Stack.Screen name="CreateParkingLot" component={CreateParkingLotScreen} />
                <Stack.Screen name="Configuration" component={ConfigScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;