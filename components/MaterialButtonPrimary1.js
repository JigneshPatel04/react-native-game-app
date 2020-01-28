import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPrimary1(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.viewMenuOrder}>View Menu &amp; Order</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "baseline",
    flexWrap: "wrap",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  viewMenuOrder: {
    width: 210,
    height: 34,
    color: "rgba(255,255,255,1)",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "space-between",
    fontSize: 22,
    fontFamily: "open-sans"
  }
});

export default MaterialButtonPrimary1;
