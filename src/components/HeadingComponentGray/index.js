import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Constants from '../../constants';
import CommonText_14 from '../CommonTexts/CommonText_14';
import CommonText_20 from '../CommonTexts/CommonText_20';
import styles from './style';

type props = {
  headingTitle: String,
  rightHeadingTitle: String,
  showAll: Boolean,
  showInfo: Boolean,
  headingTextColor: String,
};

const HeadingComponentGray = ({headingTitle, showAll, showInfo, rightHeadingTitle, headingTextColor}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CommonText_20
          value={headingTitle}
          numberOfLines={1}
          textColor={headingTextColor === undefined ? Constants.Colors.text_gray_black: headingTextColor}
        />
      </View>
      {showAll && (
        <View style={styles.rightContainer}>
          <CommonText_14
            textColor={Constants.Colors.themeColor}
            value={'全部'}
            numberOfLines={1}
          />
          <View style={styles.arrowContainer}>
            <Image source={Constants.Images.Forward_arrow_icon} />
          </View>
        </View>
      )}
      {showInfo && (
        <View style={styles.rightContainer}>
          <View style={styles.rightContainer}>
          <CommonText_14
            textColor={Constants.Colors.opcity_38_text_color}
            value={rightHeadingTitle}
            numberOfLines={1}
          />
          <View style={styles.arrowContainer}>
            <Image source={Constants.Images.Help_info_icon} />
          </View>
        </View>
        </View>
      )}
    </View>
  );
};
//Help_info_icon
export default React.memo(HeadingComponentGray);
