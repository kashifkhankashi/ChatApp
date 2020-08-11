import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
  // Image,
  // StatusBar,
  // TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MIcon from "react-native-vector-icons/MaterialIcons";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  // const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [emailIcon, setEmailIcon] = useState(false);
  const [passwordIcon, setPasswordIcon] = useState(true);
  const [confirmPasswordIcon, setConfirmPasswordIcon] = useState(true);

  const setEmailFun = (text) => {
    if (text.length >= 4) {
      setEmailIcon(true);
      setEmail(text);
    } else {
      setEmailIcon(false);
      setEmail(text);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Register Now!</Text>
      </View>
      {/* ******************** EMAIL START ******************** */}
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <MIcon name="person-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onEndEditing={(text) => {
              setEmailFun(text);
            }}
          />
          {emailIcon ? (
            <Animatable.View animation="bounceIn" duration={1100}>
              <MIcon name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>

        {/* ******************* EMAIL END ******************** */}
        {/* ******************** PASSWORD START ******************** */}
        <Text style={[styles.text_footer, { marginTop: 30 }]}>Password</Text>
        <View style={styles.action}>
          <MIcon name="lock-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="password"
            style={styles.textInput}
            secureTextEntry={passwordIcon}
          />
          <TouchableOpacity
            onPress={() => {
              setPasswordIcon(!passwordIcon);
            }}
          >
            {passwordIcon ? (
              <MIcon name="visibility-off" color="gray" size={20} />
            ) : (
              <MIcon name="visibility" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* ******************** PASSWORD END ******************** */}
        {/* ********************CONFIRM PASSWORD START ******************** */}
        <Text style={[styles.text_footer, { marginTop: 30 }]}>
          Confirm password
        </Text>
        <View style={styles.action}>
          <MIcon name="lock-outline" size={20} color="#05375a" />
          <TextInput
            placeholder="confirm password"
            style={styles.textInput}
            secureTextEntry={confirmPasswordIcon}
          />
          <TouchableOpacity
            onPress={() => {
              setConfirmPasswordIcon(!confirmPasswordIcon);
            }}
          >
            {confirmPasswordIcon ? (
              <MIcon name="visibility-off" color="gray" size={20} />
            ) : (
              <MIcon name="visibility" color="gray" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {/* ******************** PASSWORD END ******************** */}
        <TouchableOpacity
          onPress={() => {
            alert("Welcome");
          }}
        >
          <View style={styles.button}>
            <LinearGradient
              colors={["#08d4c4", "#01ab9d"]}
              style={styles.signIn}
            >
              <Text style={styles.textSign}>Sign Up</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.signIn,
            { borderWidth: 1, borderColor: "#009387", marginTop: 18 },
          ]}
          onPress={() => {
            navigation.navigate("SignInScreen");
          }}
        >
          <Text style={[styles.textSign, { color: "#009387" }]}>Sign In</Text>
        </TouchableOpacity>
      </Animatable.View>
      <Text>{email}</Text>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#009387",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#f2f2c2",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#FF0000",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#05375a",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 14,
  },
  button: {
    alignItems: "center",
    marginTop: 50,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
