import React from "react";
import { createStackNavigator, TransitionPresets  } from "@react-navigation/stack";
// import AuthStack from "./AuthStack";
// import AppStack from "./AppStack/AppMainStack";
import { HomeScreen, FaceCallScreen, FaceCallTEScreen, FaceCallQAScreen, FaceCallingScreen } from '../containers';
import TabStack from './AppStack'

const Stack = createStackNavigator();

let Navigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, gestureDirection:'horizontal',
    ...TransitionPresets.SlideFromRightIOS}} animation="fade" headerMode='screen'>
          <Stack.Screen name="HomeScreen" component={TabStack} />
          <Stack.Screen name="FaceCallScreen" component={FaceCallScreen} />
          <Stack.Screen name='FaceCallTEScreen' component={FaceCallTEScreen} />
          <Stack.Screen name="FaceCallQAScreen" component={FaceCallQAScreen} />
          <Stack.Screen name='FaceCallingScreen' component={FaceCallingScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;