/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import {
  View,
  StatusBar,
  Text,
  Image,
  ImageBackground,
  LogBox,
  StyleSheet
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import Constants from './src/constants'
import Navigations from './src/navigations';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar
            backgroundColor={Constants.Colors.themeColor}
            barStyle="light-content"
          />
          <SafeAreaProvider>
            <View style={styles.container}>
                  <Navigations />
            </View>
          </SafeAreaProvider>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
