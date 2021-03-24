import React, {Component} from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import Constants from '../../constants';
import CommonText_14 from '../CommonTexts/CommonText_14';
import CommonText_20 from '../CommonTexts/CommonText_20';
import styles from './style';

type props = {
  headingTitle: String,
  showAll: Boolean,
};

const HeadingComponent = ({headingTitle, showAll}: props) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CommonText_20
          value={headingTitle}
          numberOfLines={1}
          textColor={Constants.Colors.text_gray_black}
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
    </View>
  );
};

export default React.memo(HeadingComponent);
