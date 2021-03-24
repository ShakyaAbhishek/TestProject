import React, { Component } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import CommonText_14 from '../CommonTexts/CommonText_14';
import styles from './style';
import Constants from '../../constants';

type props = {
    data: Array,
    onPressTabButton: Object,
}

const HomeTabMenu = ({data, onPressTabButton}:props) => {

    const tabRenderList = ({item, index}) => {
        return (
          <TouchableOpacity activeOpacity={0.9} onPress={()=>onPressTabButton(item)} style={styles.tabRenderListContainer}>
            <View
              style={styles.imageWrapperStyle}>
              <View style={styles.imageStyle}>
              <Image resizeMode={'contain'} source={item.icon} />
              </View>
            </View>
            <View style={styles.textWrapper}>
              <CommonText_14 textColor={Constants.Colors.themeColor} numberOfLines={2} value={item.title} />
            </View>
          </TouchableOpacity>
        );
      };
    

    return (
        <View style={styles.container}>
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={tabRenderList}
          />
        </View>
    );
};


export default React.memo(HomeTabMenu);
