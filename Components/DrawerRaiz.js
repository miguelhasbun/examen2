import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createDrawerNavigator } from "react-navigation";
import All from "../Container/All";
import Done from "../Container/Done";

export default (DrawerRaiz = createDrawerNavigator({
  All: {
    screen: All
  },
  Done: {
    screen: Done
  }
}));