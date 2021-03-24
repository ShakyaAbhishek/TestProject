import React from 'react';
import {View, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import Constants from '../../constants';
import styles from './style';

type props = {
  data: Object,
  onPressFirstButton: Object,
  onPressSecondButton: Object,
};

const FaceCallListContainer = ({data, onPressFirstButton, onPressSecondButton}: props) => {
  const renderItemList = ({item, index}) => {
    return (
      <View style={styles.listContainer}>
        <View
          style={[styles.listImageWrapper,{
            borderColor: item.isSelected
              ? Constants.Colors.themeColor
              : Constants.Colors.white_color,
          }]}>
          <Image
            resizeMode={'contain'}
            style={styles.listImageStyle}
            source={item.icon}
          />
        </View>
        <View style={styles.listTextWrapper}>
          <Text allowFontScaling={false} style={[styles.listTitleTextStyle,{ color: item.isSelected ? Constants.Colors.themeColor : Constants.Colors.text_gray_black,}]}>{item.title}</Text>
        </View>
      </View>
    );
  };

  const renderItemHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <Text allowFontScaling={false} style={styles.headerTextStyle}>已選擇歌曲：A Worm Can Wiggle Wiggle</Text>
      </View>
    );
  };

  const renderItemFooter = () => {
    return (
      <View style={styles.buttonWrapper}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressFirstButton}
          style={styles.buttonContainer1}>
          <Text style={styles.buttonTextStyle1}>取消</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={onPressSecondButton}
          style={styles.buttonContainer}>
          <Text style={styles.buttonTextStyle}>切換</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.cardHeadingTextStyle}>
        選擇Face Call對象
      </Text>
        <FlatList
          data={data}
          ListHeaderComponent={renderItemHeader}
          ListFooterComponent={renderItemFooter}
          horizontal={false}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          numColumns={4}
          renderItem={renderItemList}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
    </View>
  );
};

export default FaceCallListContainer;
