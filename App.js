import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './Screens/Loginscreen'
import {createAppContainer, createSwitchNavigator} from "react-navigation"
import {AppTabNavigator} from "./Components/Apptabnavigator"
export default function App() {
  return (
  <AppContainer/>
  );
}
const SwitchNavigator= createSwitchNavigator({
  Loginscreen:{screen:Loginscreen},
  BottomTab:{screen:AppTabNavigator}
})
const AppContainer= createAppContainer(SwitchNavigator)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
