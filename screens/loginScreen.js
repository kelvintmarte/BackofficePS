import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  BackHandler,
} from "react-native";
import {
  TextInput,
  Snackbar,
  Text,
  Button,
} from "react-native-paper";
import Icon from 'react-native-paper/src/components/Icon'
import axios from 'axios';

export default function App({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(true);
  const onDismissSnackBar = () => setVisible(false);
  const [customAlert, setCustomAlert] = useState({
    severity: "error",
    message: "placeHolder",
  });

  useEffect(() => {
    const backAction = () => {
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);

  const SendToBackend = () => {
    const axiosUrl = "http://localhost:3000/user/login";
    console.log(axiosUrl);
    const data = {
      email: email.toLowerCase(),
      password: password,
    };
    axios
      .post(axiosUrl, data, { withCredentials: true })
      .then((response) => {
        console.log(response.data);
        if (response.data.body.success) {
          let user = response.data.body.user;
          console.log("User: ");
          console.log(user);
          navigation.navigate("Main", user);
        } else {
          setCustomAlert({
            severity: "error",
            message: response.data.body.message,
          });
          onToggleSnackBar();
        }
      })
      .catch((error) => {
        console.log(error);
        setCustomAlert({
          severity: "error",
          message: "One or more fields are empty",
        });
        onToggleSnackBar();
      });
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/parkingspot_crop_logo.png")} />
      <StatusBar style="auto" />
      <TextInput
        style={styles.reducedMarginBtn}
        label='Email'
        mode='outlined'
        onChangeText={(email) => setEmail(email)}
      />
      <TextInput
        style={styles.reducedMarginBtn}
        label='Password'
        mode='outlined'
        onChangeText={(password) => setPassword(password)}
        secureTextEntry={true}
      />
      <Text style={{ marginTop: 15, color: '#6563DB' }}>Forgot Password?</Text>
      <Button
        style={styles.reducedMarginBtn}
        mode='contained'
        onPress={() => SendToBackend()}
        //onPress={() => navigation.navigate('ParkingLot')}
        width='80%'
      >
        Log in
      </Button>
      <Button
        style={styles.reducedMarginBtn}
        mode='contained'
        // onPress={() => SendToBackend()}
        onPress={() => navigation.navigate('Debug')}
        width='80%'
      >
        Debug
      </Button>
      {/* <Text style={{marginTop: 15}}>Don't have an account? 
          <Text style={{marginTop: 15, color: '#6563DB'}} onPress={() => navigation.navigate('Register')}> Create account</Text>
        </Text> */}
      <Snackbar
        visible={visible}
        onDismiss={onDismissSnackBar}
        style={{ backgroundColor: '#D1312A' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon source="alert-circle-outline" color="#fff" size={24} />
          <Text style={{ marginLeft: 10, color: '#fff', fontWeight: 'bold' }}>{customAlert.message}</Text>
        </View>
      </Snackbar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1,
  },
  image: {
    marginBottom: 40,
    height: '20%',
    width: '95%',
    resizeMode: 'contain',
  },
  button: {
    marginTop: 25,
    fullWidth: true,
    width: '70%',
  },
  reducedMarginBtn: {
    marginTop: 15,
    fullWidth: true,
    width: '70%',
  }
});