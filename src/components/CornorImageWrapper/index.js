import React, {Component} from 'react';
import {View, Image} from 'react-native';
import Constants from '../../constants';
import styles from './style';

const CornorImageWrapper = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.topImageStyle}>
        <Image source={Constants.Images.Top_left_card_image} />
      </View>
      <View style={styles.container}>{props.children}</View>
      <View style={styles.bottomImageStyle}>
        <Image source={Constants.Images.Bottom_right_card_image} />
      </View>
    </View>
  );
};

export default React.memo(CornorImageWrapper);
