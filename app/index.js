import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useRouter } from 'expo-router';
import LoginScreen from '../screens/loginScreen.js';
import StartingScreen from '../screens/startingScreen.js';
import DebugScreen from '../screens/debugScreen.js';
import OrganizationScreen from '../screens/mainScreens/organizationScreen.js';
import CreateOrganizationScreen from '../screens/createScreens/createOrganization.js';
import CreateParkingScreen from '../screens/createScreens/createParking.js';
import CreateParkingLotScreen from '../screens/createScreens/createParkingLot.js';
import ConfigScreen from '../screens/mainScreens/configScreen.js';
import DocumentationScreen from '../screens/mainScreens/documentationScreen.js';
import supportScreen from '../screens/supportScreen.js';
import DashboardScreen from '../screens/mainScreens/dashboardScreen.js';
import ParkingLotScreen from "../screens/mainScreens/parkinglotScreen.js"
import ReservationScreen from '../screens/mainScreens/reservationScreen.js';

const App = () => {
    const router = useRouter();
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Starting" component={StartingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Debug" component={DebugScreen} />
                <Stack.Screen name="ParkingLot" component={ParkingLotScreen} />
                <Stack.Screen name="Organization" component={OrganizationScreen} />
                <Stack.Screen name="CreateOrganization" component={CreateOrganizationScreen} />
                <Stack.Screen name="CreateParking" component={CreateParkingScreen} />
                <Stack.Screen name="CreateParkingLot" component={CreateParkingLotScreen} />
                <Stack.Screen name="Configuration" component={ConfigScreen} />
                <Stack.Screen name="Documentation" component={DocumentationScreen} />
                <Stack.Screen name="Support" component={supportScreen} />
                <Stack.Screen name="Dashboard" component={DashboardScreen} />
                <Stack.Screen name="Reservation" component={ReservationScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;