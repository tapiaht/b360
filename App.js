//import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
// import 'android.os.Bundle';
import 'react-native-gesture-handler';
//import React from 'react';
//import { StyleSheet } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
// import NavigationStack from './src/navigation/NavigationStack';
//import NavigationTab from './src/navigation/NavigationTab';
//import NavigationDrawer from './src/navigation/NavigationDrawer';
// import LoginForm from './src/components/LoginForm';
// import Saludar from './src/components/Saludar';
import React, { createRef } from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './src/navigation/DrawerNavigator'

const navigationRef = createRef()
const nav = () => navigationRef.current

export default function App() {
  return (
<SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer ref={navigationRef}>
          <DrawerNavigator nav={nav} />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

