import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Constants from '../../constants';
import styles from './style';

type props = {
  cardTitle: String,
  cardImage: Object,
  onPressCard: Object,
};

const FaceCallBigCard = ({cardImage, cardTitle, onPressCard}: props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPressCard}
      style={styles.teamCardStyle}>
      <Image source={cardImage} />
      <View style={styles.cardInnerWrapper}>
        <Text allowFontScaling={false} style={styles.cardTextStyle}>
          {cardTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default FaceCallBigCard;
