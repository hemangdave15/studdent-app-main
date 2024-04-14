import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { router } from "expo-router";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";


const index = () => {
  const [pwd, setPwd] = useState("");
  const [failed, setFailed] = useState(false);
  return (
 
    <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
    <View
      style={{
        height: "100%",
        padding: 50,
        display: "flex",
        gap: 10,
        justifyContent: "flex-start",
        backgroundColor: ''
      }}
    >
      <Image
        source={require('../assets/flexilogo.png')}
        style={{
          width: 250,
          height: 250,
          resizeMode: "cover",
          borderRadius: 1,
          alignSelf:"center",
          marginTop:40
        }}
      />

      <Text style={{ fontSize: 30 }}>Login</Text>
      <Text>Enter Admin Password:</Text>
      <TextInput
        style={{ borderWidth: 1, padding: 3, borderRadius: 5 }}
        textContentType="password"
        placeholder="Password"
        onChangeText={(s) => {
          console.log("Changed");
          setPwd(s);
        }}
      />
      {failed && <Text style={{ color: "red" }}>Couldn't log in</Text>}
      <Button
        title="Login"
        onPress={() => {
          console.log("clicked");

          axios
            .post("http://192.168.1.7:8000/login", { password: pwd })
            .then(() => {
              console.log("Logged in");
              router.replace("/(home)");
            })
            .catch((e) => {
              console.log("Couldn't login");
              setFailed(true);
            });
        }}
      />


    </View>
    </LinearGradient>
  );
};

export default index;

const styles = StyleSheet.create({});

// "/"
