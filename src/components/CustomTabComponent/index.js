import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, } from 'react-native';
import styles from './style';
import Constants from '../../constants';

const MyTabBar = ({ state, descriptors, navigation }) => {
    const focusedOptions = descriptors[state.routes[state.index].key].options;
  
    if (focusedOptions.tabBarVisible === false) {
      return null;
    }
  
    return (
      <View style={{ flexDirection: 'row',shadowColor: '#000000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.7,
      shadowRadius: 4,  
      elevation: 3,}}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };
  
          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
  
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.9}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ 
                flex: 1, 
                height:53,
                backgroundColor:Constants.Colors.commonWhite_Color
              }}
            >
              <View style={{flex:1, backgroundColor:Constants.Colors.commonWhite_Color, justifyContent:'flex-end', alignItems:'center', paddingBottom:2}} >
                {isFocused ? <View style={{position:'absolute', bottom:20,  height:52, width:52, borderRadius:26, backgroundColor:Constants.Colors.commonWhite_Color, justifyContent:'center', alignItems:'center'}}>
                  <Image  source={state.index === 0 ? Constants.Images.Home_screen_icon : state.index === 1 ? Constants.Images.Calendar_screen_icon : state.index === 2 ? Constants.Images.Fevorite_screen_icon : state.index === 3 ? Constants.Images.Notification_screen_icon : Constants.Images.Profile_screen_icon} />
                </View>:
                <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                  <Image source={index === 0 ? Constants.Images.Home_screen_icon : index === 1 ? Constants.Images.Calendar_screen_icon : index === 2 ? Constants.Images.Fevorite_screen_icon : index === 3 ? Constants.Images.Notification_screen_icon : Constants.Images.Profile_screen_icon} />
                </View>}
              <Text allowFontScaling={false} style={[styles.bottomFontStyle,{ color: isFocused ? Constants.Colors.button_red_color : '#222' }]}>
                {label}
              </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }

export default MyTabBar;
