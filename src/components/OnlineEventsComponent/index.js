import React, { Component } from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import Constants from '../../constants';
import styles from './style';

const OnlineEventsComponent = () => {
    return (
          <View style={styles.container}>
            <View
              style={styles.container1}>
              <View
                style={styles.cardInnerWrapper}>
                <ImageBackground source={Constants.Images.Online_event_dummy_img}
                  imageStyle={styles.imageStyles}
                  resizeMode={'cover'}
                  style={styles.imageWrapper}>
                    <View style={styles.imageWrapper1}>
                      <Image source={Constants.Images.Play_icon_Orange_img} />
                    </View>
                  </ImageBackground>
                <View style={styles.titleWrapper}>
                  <Text allowFontScaling={false} style={styles.titleTextStyle}>World Family Club Show - ABC</Text>
                </View>
              </View>
              <View
               style={styles.cardInnerWrapper}>
                <ImageBackground source={Constants.Images.Online_event_dummy_img}
                  imageStyle={styles.imageStyles}
                  resizeMode={'cover'}
                  style={styles.imageWrapper}>
                    <View style={styles.imageWrapper1}>
                      <Image source={Constants.Images.Play_icon_Orange_img} />
                    </View>
                  </ImageBackground>
                <View style={styles.titleWrapper}>
                  <Text allowFontScaling={false} style={styles.titleTextStyle}>World Family Club Show - ABC</Text>
                </View>
              </View>
              <View
                style={styles.cardInnerWrapper}>
                <ImageBackground source={Constants.Images.Online_event_dummy_img}
                  imageStyle={styles.imageStyles}
                  resizeMode={'cover'}
                  style={styles.imageWrapper}>
                    <View style={styles.imageWrapper1}>
                      <Image source={Constants.Images.Play_icon_Orange_img} />
                    </View>
                  </ImageBackground>
                <View style={styles.titleWrapper}>
                  <Text allowFontScaling={false} style={styles.titleTextStyle}>World Family Club Show - ABC</Text>
                </View>
              </View>
            </View>
          </View>
    );
};

export default React.memo(OnlineEventsComponent);
