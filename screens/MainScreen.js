import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput
} from "react-native";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";

function MainPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/ic-notification.png")}
          resizeMode="center"
          style={styles.image2}
        ></Image>
        <View style={styles.rect}>
          <ImageBackground
            source={require("../assets/images/navigation-bg.jpg")}
            resizeMode="stretch"
            style={styles.image3}
            imageStyle={styles.image3_imageStyle}
          >
            <View style={styles.image4RowColumn}>
              <View style={styles.image4Row}>
                <Image
                  source={require("../assets/images/ic-notification.png")}
                  resizeMode="contain"
                  style={styles.image4}
                ></Image>
                <Image
                  source={require("../assets/images/_80.png")}
                  resizeMode="center"
                  style={styles.image5}
                ></Image>
              </View>
              <View style={styles.image7Row}>
                <Image
                  source={require("../assets/images/offers-ic.png")}
                  resizeMode="contain"
                  style={styles.image7}
                ></Image>
                <Image
                  source={require("../assets/images/Favourites-ic.png")}
                  resizeMode="contain"
                  style={styles.image6}
                ></Image>
                <Image
                  source={require("../assets/images/my-account-ic.png")}
                  resizeMode="contain"
                  style={styles.image8}
                ></Image>
              </View>
              <View style={styles.textInput1Row}>
                <TextInput
                  placeholder="Offers"
                  placeholderTextColor="rgba(230, 230, 230,1)"
                  style={styles.textInput1}
                ></TextInput>
                <View style={styles.textInputStack}>
                  <TextInput
                    placeholder="Favourites"
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    style={styles.textInput}
                  ></TextInput>
                  <TextInput
                    placeholder="My Account"
                    placeholderTextColor="rgba(230, 230, 230,1)"
                    maxLength={140}
                    style={styles.textInput2}
                  ></TextInput>
                </View>
              </View>
              <View style={styles.image9StackColumnRow}>
                <View style={styles.image9StackColumn}>
                  <View style={styles.image9Stack}>
                    <Image
                      source={require("../assets/images/orders-ic.png")}
                      resizeMode="contain"
                      style={styles.image9}
                    ></Image>
                    <TextInput
                      placeholder="Orders"
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      style={styles.textInput3}
                    ></TextInput>
                  </View>
                  <Image
                    source={require("../assets/images/location-ic.png")}
                    resizeMode="contain"
                    style={styles.image12}
                  ></Image>
                </View>
                <View style={styles.image10StackStack}>
                  <View style={styles.image10Stack}>
                    <Image
                      source={require("../assets/images/Reward-Points-ic.png")}
                      resizeMode="contain"
                      style={styles.image10}
                    ></Image>
                    <TextInput
                      placeholder="Testimonials"
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      autoCapitalize="none"
                      autoFocus={false}
                      autoCorrect={false}
                      defaultValue=""
                      numberOfLines={1}
                      returnKeyLabel=""
                      style={styles.textInput5}
                    ></TextInput>
                  </View>
                  <View style={styles.textInput4Stack}>
                    <TextInput
                      placeholder="Reward Points"
                      placeholderTextColor="rgba(230, 230, 230,1)"
                      autoCapitalize="words"
                      autoFocus={false}
                      autoCorrect={false}
                      defaultValue=""
                      multiline={true}
                      numberOfLines={1}
                      returnKeyLabel=""
                      textBreakStrategy="simple"
                      style={styles.textInput4}
                    ></TextInput>
                    <Image
                      source={require("../assets/images/Abute-us-ic.png")}
                      resizeMode="contain"
                      style={styles.image13}
                    ></Image>
                  </View>
                  <Image
                    source={require("../assets/images/Testimonials-ic.png")}
                    resizeMode="contain"
                    style={styles.image11}
                  ></Image>
                </View>
              </View>
              <View style={styles.textInput6Stack}>
                <TextInput
                  placeholder="Locations"
                  placeholderTextColor="rgba(230, 230, 230,1)"
                  style={styles.textInput6}
                ></TextInput>
                <TextInput
                  placeholder="About Us"
                  placeholderTextColor="rgba(230, 230, 230,1)"
                  style={styles.textInput7}
                ></TextInput>
              </View>
            </View>
            <MaterialButtonPrimary1
              style={styles.materialButtonPrimary1}
            ></MaterialButtonPrimary1>
          </ImageBackground>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 0
  },
  image2: {
    top: 81,
    left: 3,
    width: 79,
    height: 41,
    position: "absolute",
    overflow: "visible"
  },
  rect: {
    top: 0,
    left: 0,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    right: 0,
    bottom: 0,
    justifyContent: "center"
  },
  image3: {
    height: 812
  },
  image3_imageStyle: {},
  image4: {
    width: 38,
    height: 38,
    marginTop: 51
  },
  image5: {
    width: 94,
    height: 100,
    marginLeft: 95
  },
  image4Row: {
    height: 100,
    flexDirection: "row",
    marginRight: 86
  },
  image7: {
    width: 60,
    height: 60
  },
  image6: {
    width: 60,
    height: 60,
    marginLeft: 29
  },
  image8: {
    width: 60,
    height: 60,
    marginLeft: 28,
    marginTop: 3
  },
  image7Row: {
    height: 63,
    flexDirection: "row",
    marginTop: 143,
    marginLeft: 38,
    marginRight: 38
  },
  textInput1: {
    width: 60,
    height: 32,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  textInput: {
    top: 0,
    left: 0,
    width: 97,
    height: 20,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  textInput2: {
    top: 2,
    left: 91,
    width: 101,
    height: 18,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  textInputStack: {
    width: 192,
    height: 20,
    marginLeft: 5,
    marginTop: 4
  },
  textInput1Row: {
    height: 32,
    flexDirection: "row",
    marginLeft: 39,
    marginRight: 17
  },
  image9: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  textInput3: {
    top: 59,
    left: 0,
    width: 60,
    height: 32,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  image9Stack: {
    width: 60,
    height: 91
  },
  image12: {
    width: 60,
    height: 60,
    marginTop: 12,
    marginLeft: 5
  },
  image9StackColumn: {
    width: 65,
    marginTop: 3
  },
  image10: {
    top: 0,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  textInput5: {
    top: 59,
    width: 134,
    height: 23,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    right: 0,
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  image10Stack: {
    top: 3,
    left: 0,
    width: 186,
    height: 82,
    position: "absolute"
  },
  textInput4: {
    top: 0,
    left: 5,
    width: 69,
    height: 46,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 1,
    textAlign: "justify"
  },
  image13: {
    top: 41,
    left: 0,
    width: 60,
    height: 60,
    position: "absolute"
  },
  textInput4Stack: {
    top: 65,
    left: 0,
    width: 74,
    height: 101,
    position: "absolute"
  },
  image11: {
    top: 0,
    left: 88,
    width: 60,
    height: 60,
    position: "absolute"
  },
  image10StackStack: {
    width: 186,
    height: 166,
    marginLeft: 23
  },
  image9StackColumnRow: {
    height: 166,
    flexDirection: "row",
    marginTop: 2,
    marginLeft: 39
  },
  textInput6: {
    top: 0,
    left: 0,
    width: 89,
    height: 32,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  textInput7: {
    top: 0,
    left: 83,
    width: 89,
    height: 32,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center"
  },
  textInput6Stack: {
    width: 172,
    height: 32,
    marginLeft: 30
  },
  image4RowColumn: {
    marginTop: 53,
    marginLeft: 24,
    marginRight: 38
  },
  materialButtonPrimary1: {
    borderRadius: 29,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 3,
    flex: 1,
    marginBottom: 560,
    marginTop: -402,
    marginLeft: 59,
    marginRight: 57
  },
  image2Stack: {
    flex: 1
  }
});

export default MainPage;
