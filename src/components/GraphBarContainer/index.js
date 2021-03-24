import React from 'react';
import {View, Image, Text} from 'react-native';
import Constants from '../../constants';
import {} from '../../components';
import styles from './style';

type props = {
    title: String, 
    totalPoints: Number,
    earnedPoints: Number,
    themeColor:String,
    themeOpacityColor: String,
    capIcon: Object,
    fillingPercentage: String,
    barHeight: Number,
 };

const GraphBarContainer = ({
    title, 
    totalPoints,
    earnedPoints,
    themeColor,
    themeOpacityColor,
    capIcon,
    fillingPercentage,
    barHeight,
}: props) => {
  return (
    <View style={{height: '100%', width: '16%', justifyContent: 'flex-end'}}>
      {/* cap Image Contaienr */}
      <View
        style={{
          height: 40,
          width: 40,
          alignSelf: 'center',
          marginBottom: 16,
          alignItems: 'center',
        }}>
        <Image source={capIcon} />
      </View>
      {/* slider Contaienr */}
      <View
        style={{
          height: barHeight,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{height: '100%', width: '100%', backgroundColor: themeOpacityColor}}>
          <View
            style={{
              height: fillingPercentage,
              width: '100%',
              backgroundColor: themeColor,
              position: 'absolute',
              zIndex: 0.5,
              bottom: 0,
            }}
          />
          <View
            style={[
              styles.triangleCorner,
              {position: 'absolute', zIndex: 1, top: -9, left: -1},
            ]}
          />
        </View>
        <View
          style={{height: 3, width: '100%', backgroundColor: themeColor}}></View>
      </View>
      {/* font detail Container */}
      <View
        style={{
          height: 41,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          allowFontScaling={false}
          style={{
            fontSize: Constants.CommonFontStyle.FONT_SIZE_12,
            lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
            letterSpacing: 0.8,
            textAlign: 'center',
            fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
            color: themeColor,
          }}>
          {title}
        </Text>
        <Text
          allowFontScaling={false}
          style={{
            fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
            lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
            textAlign: 'center',
            fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
            color: themeColor,
          }}>
          {earnedPoints}/{totalPoints}
        </Text>
      </View>
    </View>
  );
};

export default GraphBarContainer;
