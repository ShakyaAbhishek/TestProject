import React from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Constants from '../../constants';
import styles from './style';

type props = {
  item: Object,
};

const FilterButtonCard = ({item}: props) => {
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: item.isSelected
            ? Constants.Colors.themeColor
            : Constants.Colors.text_gray_black,
        },
      ]}>
      {/* button Text */}
      <View style={styles.btnTextContainer}>
        <Text
        allowFontScaling={false}
          style={[
            styles.buttonTextStyle,
            {
              color: item.isSelected
                ? Constants.Colors.themeColor
                : Constants.Colors.text_gray_black,
            },
          ]}>
          {item.title}
        </Text>
      </View>
      {/* Check Button */}
      {item.isSelected && (
        <View>
          <Image source={Constants.Images.Check_theme_icon} />
        </View>
      )}
    </View>
  );
};

export default FilterButtonCard;
