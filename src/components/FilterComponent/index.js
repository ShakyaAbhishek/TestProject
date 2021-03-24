import React from 'react';
import {View, TouchableOpacity, Image, Text, ScrollView} from 'react-native';
import Constants from '../../constants';
import {FilterButtonCard} from '../../components';
import styles from './style';

type props = {
  FilterData1: Object,
  FilterData2: Object,
  FilterData3: Object,
  onPressReset: Object,
  onPressFirstButton: Object,
  onPressSecondButton: Object,
};

const FilterComponent = ({
  FilterData1,
  FilterData2,
  FilterData3,
  onPressFirstButton,
  onPressSecondButton,
  onPressReset,
}: props) => {
  const renderListItem = (item) => {
    return (
      // filter Buttom Component
      <FilterButtonCard item={item} />
    );
  };

  return (
    <View style={styles.container}>
      <Text allowFontScaling={false} style={styles.cardHeadingTextStyle}>
        選擇 Song List 搜尋分類
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.mainContainer}>
        <View style={styles.filterWrapper}>
          <View style={styles.filterTitleContainer}>
            <Text allowFontScaling={false}>類別</Text>
          </View>
          <View style={styles.filterListWrapper}>
            {/* first filter */}
            {FilterData1.map((i) => renderListItem(i))}
          </View>
        </View>
        <View style={styles.filterWrapper}>
          <View style={styles.filterTitleContainer}>
            <Text allowFontScaling={false} style={styles.titleTextStyle}>類別</Text>
          </View>
          <View style={styles.filterListWrapper}>
            {/* first filter */}
            {FilterData2.map((i) => renderListItem(i))}
          </View>
        </View>
        <View style={styles.filterWrapper}>
          <View style={styles.filterTitleContainer}>
            <Text allowFontScaling={false} style={styles.titleTextStyle}>類別</Text>
          </View>
          <View style={styles.filterListWrapper}>
            {/* first filter */}
            {FilterData3.map((i) => renderListItem(i))}
          </View>
        </View>
        <TouchableOpacity activeOpacity={0.8} style={styles.resetButtonWrapper}>
          <View>
            <Image source={Constants.Images.Reset_icon_grya} />
          </View>
          <View style={styles.resetButtonTextWrapper}>
            <Text allowFontScaling={false} style={styles.titleTextStyle}>清除勾選</Text>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressFirstButton}
            style={styles.buttonContainer1}>
            <Text allowFontScaling={false} style={styles.buttonTextStyle1}>取消</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPressSecondButton}
            style={styles.buttonContainer}>
            <Text allowFontScaling={false} style={styles.buttonTextStyle}>切換</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default FilterComponent;
