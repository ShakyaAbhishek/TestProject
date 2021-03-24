import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import Constants from '../../constants';
import styles from './style';

type props = {
  isVisibleModal: Boolean,
  onCloseFunction: Object,
  headingText: String,
  contentText: String,
  multiButtons: Boolean,
};

const AlertModal = ({
  isVisibleModal,
  onCloseFunction,
  headingText,
  contentText,
  multiButtons,
}: props) => {
  return (
    <Modal isVisible={isVisibleModal} onBackdropPress={onCloseFunction}>
      <View style={styles.container}>
        <View style={styles.infoImageWrapper}>
          <Image source={Constants.Images.Alert_info_icon} />
        </View>
        <View style={styles.bodyContainer}>
          <Text allowFontScaling={false} style={styles.headingTextStyle}>{headingText}</Text>
          <View style={styles.contentTextWrapper}>
            <Text allowFontScaling={false} style={styles.contentTextStyle}>{contentText}</Text>
          </View>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onCloseFunction}
              style={styles.buttonContainer}>
              <Text allowFontScaling={false} style={styles.buttonTextStyle}>我知道了</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(AlertModal);
