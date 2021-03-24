import React from 'react';
import {View, Text } from 'react-native';
import styles from './style';

type props = {
  item: Object,
};

const QaCardComponent = ({item}: props) => {
  return (
    <View style={styles.contanier}>
      {/* Question Text */}
      <Text allowFontScaling={false} style={styles.questionTextStyle}>
        {item.Question}
      </Text>
      <View style={styles.answerWrapper}>
        {/* Answer Text */}
        <Text allowFontScaling={false} style={styles.answerTextStyle}>
          {item.Answer}
        </Text>
      </View>
    </View>
  );
};

export default QaCardComponent;
