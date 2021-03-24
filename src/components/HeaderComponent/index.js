import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import Constants from '../../constants';

type props = {
  rightTitle: String,
  mainTitle: String,
  backButton: Boolean,
  onPressBackButton: Object,
};

const HeaderComponent = ({
  rightTitle,
  mainTitle,
  backButton,
  onPressBackButton,
}: props) => {
  return (
    <View>
      {backButton ? (
        <View style={styles.withBackBtnWrapper}>
          <TouchableOpacity onPress={onPressBackButton}>
            <Image source={Constants.Images.Backward_arrow_icon} />
          </TouchableOpacity>
          <Text allowFontScaling={false} style={styles.rightTitleTextStyle}>
            {rightTitle}
          </Text>
        </View>
      ) : (
        <View style={styles.withoutBackButtonWrapper}>
          <Text allowFontScaling={false} style={styles.rightTitleTextStyle}>
            {rightTitle}
          </Text>
        </View>
      )}
      <View style={styles.mainContainer}>
        <Text allowFontScaling={false} style={styles.mainContainerTextStyle}>
          {mainTitle}
        </Text>
      </View>
    </View>
  );
};

export default React.memo(HeaderComponent);
