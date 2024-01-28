import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer as NavigatorContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

function ViewOne() {
  return (
    <View style={{ flex: 1, backgroundColor: "#f0f3bd", alignItems: "center", justifyContent: "center"}}>
      <Text>Hello, SER 423! My name is Vatsal Malaviya.</Text>
    </View>
  );
}

function ViewTwo() {
  return (
    <View style={{ flex: 1, backgroundColor: "#e5cdc8", alignItems: "center", justifyContent: "center"}}>
      <Text>Thanks for using my app!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigatorContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={ViewOne} />
        <Tab.Screen name="End" component={ViewTwo} />
      </Tab.Navigator>
    </NavigatorContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6495ED",
    alignItems: "center",
    justifyContent: "center",
  },
});