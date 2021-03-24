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
};

const TwoButtonAlertModal = ({
  isVisibleModal,
  onCloseFunction,
  headingText,
  contentText,
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
              style={styles.buttonContainer1}>
              <Text allowFontScaling={false} style={styles.buttonTextStyle1}>取消</Text>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={onCloseFunction}
              style={styles.buttonContainer}>
              <Text allowFontScaling={false} style={styles.buttonTextStyle}>切換</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default React.memo(TwoButtonAlertModal);
