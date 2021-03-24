import React, {Component} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Constants from '../../constants';
import styles from './style';

type props = {};

const SongListComponent = ({}: props) => {
  return (
    <View
      style={styles.container}>
          {/* First Card */}
      <TouchableOpacity
        activeOpacity={0.9}
        //onPress={() => setOpenAlertModal(true)}
        style={styles.cardWrapper}>
        <View
          style={styles.cardLeftWrapper}>
          <Image
            resizeMode={'contain'}
            style={styles.cardImageStyle}
            source={Constants.Images.Online_event_dummy_img}
          />
        </View>
        <View
          style={styles.cardRightWrapper}>
          <View style={styles.titleWrapper}>
            <Text allowFontScaling={false}
              style={styles.titleTextStyle}>
              My Little Car
            </Text>
            <Text
              allowFontScaling={false}
              style={styles.detailTextStyle}>
              美語叔叔：Jack
            </Text>
          </View>
          <View>
            <Image source={Constants.Images.Heart_gray_icon} />
          </View>
        </View>
      </TouchableOpacity>

      {/* Card 2 */}
      <View
        style={styles.cardWrapper}>
        <View
          style={styles.cardLeftWrapper}>
          <Image
            resizeMode={'contain'}
            style={styles.cardImageStyle}
            source={Constants.Images.Online_event_dummy_img}
          />
        </View>
        <View
          style={styles.cardRightWrapper}>
          <View style={styles.titleWrapper}>
            <Text allowFontScaling={false}
              style={styles.titleTextStyle}>
              My Little Car
            </Text>
            <Text allowFontScaling={false}
              style={styles.detailTextStyle}>
              美語叔叔：Jack
            </Text>
          </View>
          <View>
            <Image source={Constants.Images.Heart_red_icon} />
          </View>
        </View>
      </View>
      {/* Card 3 */}
      <View
        style={styles.cardWrapper}>
        <View
          style={styles.cardLeftWrapper}>
          <Image
            resizeMode={'contain'}
            style={styles.cardImageStyle}
            source={Constants.Images.Online_event_dummy_img}
          />
        </View>
        <View
          style={styles.cardRightWrapper1}>
          <View style={styles.titleWrapper}>
            <Text allowFontScaling={false}
              style={styles.titleTextStyle}>
              My Little Car
            </Text>
            <Text allowFontScaling={false}
              style={styles.detailTextStyle}>
              美語叔叔：Jack
            </Text>
          </View>
          <View>
            <Image source={Constants.Images.Heart_gray_icon} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default SongListComponent;
