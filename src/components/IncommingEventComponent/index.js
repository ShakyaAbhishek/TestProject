import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from 'react-native';
import Constants from '../../constants';
import styles from './style';

const IncommingEventComponent = () => {
  return (
    <View
      style={styles.container}>
        <ImageBackground
          resizeMode={'cover'}
          source={Constants.Images.Gray_background_image}
          style={styles.leftImageContainer}
          imageStyle={styles.leftImageStyle}>
          <View
            style={styles.leftImageContainer1}>
            <Image source={Constants.Images.Star_badge_image} />
          </View>
        </ImageBackground>
      <View style={styles.midContainer}>
        <Text allowFontScaling={false} style={styles.titleTextStyle}>{'尚無即將到來的活動'}</Text>
      </View>
      <View style={styles.rightContainer}>
        <View
          style={styles.rightButtonWrapper}>
          <Text allowFontScaling={false} style={styles.buttonText}>報名去</Text>
        </View>
      </View>
    </View>
  );
};

export default React.memo(IncommingEventComponent);
