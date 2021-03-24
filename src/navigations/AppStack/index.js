import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {MyTabBar} from '../../components';
import {HomeScreen, FaceCallQAScreen, FaceCallTEScreen, FaceCallScreen} from '../../containers';

const Tab = createBottomTabNavigator();

export default function TabStack() {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      >
        {/* Import All Tab Screens Here */}
      <Tab.Screen name="首頁" component={HomeScreen}  />
      <Tab.Screen name="學習紀錄" component={FaceCallQAScreen} />
      <Tab.Screen name="我的最愛" component={FaceCallTEScreen} />
      <Tab.Screen name="訊息通知" component={FaceCallScreen} />
      <Tab.Screen name="我的專區" component={HomeScreen} />
    </Tab.Navigator>
  );
}