import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import Constants from '../../constants';

type props = {};

const TE_TeamCard = ({}: props) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          width: '48%',
          backgroundColor: Constants.Colors.white_color,
          borderRadius: 10,
          borderColor: Constants.Colors.themeColor,
          borderWidth: 2,
        }}>
        <Image source={Constants.Images.User_TE_Color_icon} />
        <View style={{paddingLeft: 7}}>
          <Text
            allowFontScaling={false}
            style={{
              fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
              fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
              lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
              color: Constants.Colors.themeColor,
            }}>
            美語叔叔阿姨
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
          width: '48%',
          backgroundColor: Constants.Colors.white_color,
          borderRadius: 10,
        }}>
        <Image source={Constants.Images.User_TE_Gray_icon} />
        <View style={{paddingLeft: 7}}>
          <Text
            style={{
              fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
              fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
              lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
              color: Constants.Colors.opcity_38_text_color,
            }}>
            ZIPPY 家族
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TE_TeamCard;
