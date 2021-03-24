import React, {Component} from 'react';
import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import styles from './style';
import Constants from '../../constants';
import CommonText_14 from '../CommonTexts/CommonText_14';
import CommonText_20 from '../CommonTexts/CommonText_20';

type props = {
  progressPercentage: String,
};

const PointsCard = ({progressPercentage}: props) => {
  return (
    <View
      style={styles.container}>
      <View
        style={styles.cardWrapper}>
        <ImageBackground
          source={Constants.Images.Ranking_Big_Star}
          imageStyle={styles.starImageWrapper}
          style={styles.imageContainer}>
          <Text
          allowFontScaling={false}
            style={styles.pointsTextStyle}>
            0
          </Text>
          <CommonText_14
            textColor={Constants.Colors.text_gray_black}
            numberOfLines={1}
            value={'電話美語'}
          />
        </ImageBackground>
      </View>
      <View style={styles.rightWrapper}>
        {/* <ScrollView style={{ backgroundColor:'red'}} horizontal={true}> */}
        <View style={styles.sliderWrapper}>
          <View style={styles.progressBarWrapper}>
            <View style={styles.progressBarLinestyle} />
            <View
              style={[styles.completeLineStyle, {width: progressPercentage}]}
            />
            <View style={{flexDirection:'row', justifyContent:'space-between', width:'100%'}}>
              <View>
                <View style={{height:7, width:1, backgroundColor:'gray'}} />
                <Text allowFontScaling={false} style={[styles.rangTextStyle,{right:3, paddingTop:2}]}>0</Text>
              </View>
              <View style={{}}>
                <View style={{alignSelf:'center', marginLeft:7, height:7, width:2, backgroundColor:Constants.Colors.themeColor}} />
                <Text allowFontScaling={false} style={[styles.rangTextStyle,{textAlign:'right', left:1, paddingTop:2}]}>100</Text>
              </View>
            </View>
            <View style={{ position:'absolute', top:-25, left:7}}>
                <Image source={Constants.Images.TolTipDummy_image} />
            </View>
            {/* <View
              style={{
                height: 10,
                width: 10,
                left: progressPercentage,
                marginLeft: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor:'red',
                top: 2,
                bottom: 0,
                right: 0,
                position: 'absolute',
              }}></View> */}
            <View
              style={{
                position: 'absolute',
                right: 12,
                top: -2,
                zIndex: 1,
              }}>
              <View style={{height: 32, width: 28}}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  resizeMode={'contain'}
                  source={Constants.Images.Ranking_Big_Star}
                />
              </View>
            </View>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    </View>
  );
};

export default React.memo(PointsCard);
