import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TextInput
} from "react-native";

function MainPage(props) {
  return (
    <View style={styles.container}>
      <View style={styles.image2Stack}>
        <Image
          source={require("../assets/images/ic-notification.png")}
          resizeMode="center"
          style={styles.image2}
        ></Image>
        <View style={styles.rect}></View>
        <ImageBackground
          source={require("../assets/images/navigation-bg.jpg")}
          resizeMode="stretch"
          style={styles.image3}
          imageStyle={styles.image3_imageStyle}
        >
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
          <View style={styles.rect2}>
            <Text style={styles.viewMenuOrder}>View Menu &amp; Order</Text>
          </View>
          <View style={styles.image7ColumnRow}>
            <View style={styles.image7Column}>
              <Image
                source={require("../assets/images/offers-ic.png")}
                resizeMode="contain"
                style={styles.image7}
              ></Image>
              <TextInput
                placeholder="Offers"
                placeholderTextColor="rgba(230, 230, 230,1)"
                style={styles.textInput1}
              ></TextInput>
            </View>
            <View style={styles.image6RowColumn}>
              <View style={styles.image6Row}>
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
          </View>
          <View style={styles.image9StackRow}>
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
            <View style={styles.image10RowColumn}>
              <View style={styles.image10Row}>
                <Image
                  source={require("../assets/images/Reward-Points-ic.png")}
                  resizeMode="contain"
                  style={styles.image10}
                ></Image>
                <Image
                  source={require("../assets/images/Testimonials-ic.png")}
                  resizeMode="contain"
                  style={styles.image11}
                ></Image>
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
            </View>
          </View>
          <View style={styles.image12Row}>
            <Image
              source={require("../assets/images/location-ic.png")}
              resizeMode="contain"
              style={styles.image12}
            ></Image>
            <Image
              source={require("../assets/images/Abute-us-ic.png")}
              resizeMode="contain"
              style={styles.image13}
            ></Image>
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
        </ImageBackground>
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
    bottom: 172
  },
  image3: {
    top: 0,
    left: 0,
    height: 812,
    position: "absolute",
    right: 0
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
    marginTop: 53,
    marginLeft: 24,
    marginRight: 109
  },
  rect2: {
    width: 240,
    height: 44,
    borderRadius: 49,
    borderColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    marginTop: 39,
    marginLeft: 67
  },
  viewMenuOrder: {
    color: "rgba(255,255,255,1)",
    justifyContent: "space-between",
    fontSize: 18,
    fontFamily: "open-sans-regular",
    textAlign: "left",
    marginTop: 13,
    marginLeft: 31
  },
  image7: {
    width: 60,
    height: 60
  },
  textInput1: {
    width: 60,
    height: 32,
    color: "rgba(255,255,255,1)",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 0,
    textAlign: "center",
    marginTop: 2,
    marginLeft: 1
  },
  image7Column: {
    width: 61
  },
  image6: {
    width: 60,
    height: 60
  },
  image8: {
    width: 60,
    height: 60,
    marginLeft: 28,
    marginTop: 3
  },
  image6Row: {
    height: 63,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 21
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
    marginTop: 4
  },
  image6RowColumn: {
    width: 192,
    marginLeft: 5,
    marginBottom: 7
  },
  image7ColumnRow: {
    height: 94,
    flexDirection: "row",
    marginTop: 60,
    marginLeft: 62,
    marginRight: 40
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
    height: 91,
    marginTop: 1
  },
  image10: {
    width: 60,
    height: 60
  },
  image11: {
    width: 60,
    height: 60,
    marginLeft: 29,
    marginTop: 1
  },
  image10Row: {
    height: 61,
    flexDirection: "row",
    marginLeft: 1,
    marginRight: 37
  },
  textInput4: {
    top: 0,
    left: 0,
    width: 67,
    height: 32,
    color: "rgba(255,255,255,1)",
    position: "absolute",
    fontSize: 15,
    fontFamily: "open-sans-regular",
    lineHeight: 15,
    letterSpacing: 1,
    textAlign: "justify"
  },
  textInput5: {
    top: 0,
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
  textInput4Stack: {
    width: 187,
    height: 32,
    marginTop: 2
  },
  image10RowColumn: {
    width: 187,
    marginLeft: 27
  },
  image9StackRow: {
    height: 95,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 63,
    marginRight: 23
  },
  image12: {
    width: 60,
    height: 60
  },
  image13: {
    width: 60,
    height: 60,
    marginLeft: 22
  },
  image12Row: {
    height: 60,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 68,
    marginRight: 150
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
    left: 85,
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
    width: 174,
    height: 32,
    marginLeft: 54
  },
  image2Stack: {
    flex: 1,
    marginBottom: -172
  }
});

export default MainPage;
