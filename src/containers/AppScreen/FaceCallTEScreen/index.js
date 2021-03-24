import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {
  HeaderComponent,
  HeadingComponentGray,
  BottomSlideModal,
  TE_TeamCard,
} from '../../../components';
import Constants from '../../../constants';
import styles from './style';

type props = {
  navigation: Object,
};

const dummy_faceCall_data = [
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 1,
    selected: true,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 2,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 3,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 4,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 5,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 6,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 7,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 8,
    selected: false,
  },
  {
    icon: Constants.Images.Dummy_faceCall_image,
    title: 'Jack',
    id: 9,
    selected: false,
  },
];

const contact_data = [
  {
    id: 1,
    tag: 'A',
    data: [
      {
        _id: 1,
        name: 'A Worm Can Wiggle Wiggle',
        like: false,
      },
      {
        _id: 2,
        name: 'A Worm Can Wiggle Wiggle',
        like: false,
      },
      {
        _id: 3,
        name: 'A Worm Can Wiggle Wiggle',
        like: false,
      },
      {
        _id: 4,
        name: 'A Worm Can Wiggle Wiggle',
        like: false,
      },
    ],
  },
  {
    id: 2,
    tag: 'B',
    data: [
      {
        _id: 1,
        name: 'Be Better',
        like: false,
      },
      {
        _id: 2,
        name: 'Be Better',
        like: false,
      },
      {
        _id: 3,
        name: 'Be Better',
        like: false,
      },
    ],
  },
  {
    id: 3,
    tag: 'C',
    data: [
      {
        _id: 1,
        name: 'A Worm Can Wiggle',
        like: false,
      },
      {
        _id: 2,
        name: 'A Worm Can Wiggle',
        like: false,
      },
    ],
  },
  {
    id: 4,
    tag: 'W',
    data: [
      {
        _id: 1,
        name: 'When The Sorcerer Wore His Magic Hat',
        like: false,
      },
      {
        _id: 2,
        name: 'Who Did It?',
        like: false,
      },
    ],
  },
];

const FaceCallTEScreen = ({navigation}: props) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);
  const renderFaceCallItem = ({item, index}) => {
    return (
      <View style={styles.faceCallContainer}>
        {/* card Image Style */}
        <ImageBackground
          style={[
            styles.imageCardWrapper,
            {
              borderColor: item.selected
                ? Constants.Colors.themeColor
                : Constants.Colors.white_color,
            },
          ]}
          source={item.icon}
          resizeMode={'contain'}
          imageStyle={styles.imageCardImageStyle}>
            {/* shadow container */}
          {!item.selected && <View style={styles.imageCardShadow} />}
        </ImageBackground>
        {/* card Title */}
        <View style={styles.titleWrapper}>
          <Text allowFontScaling={false} style={styles.titleTextStyle}>
            {item.title}
          </Text>
        </View>
      </View>
    );
  };

  const onPressLikeButton = (index, subIndex) => {
    // alert(`${subIndex} ${index}`)
  };

  const onPressContacts = () => {
    navigation.navigate('FaceCallingScreen');
  }

  const renderListItem = ({item, index}) => {
    return (
      <View style={styles.contactListContainer}>
        <View style={styles.tagWrapper}>
          <Text
            numberOfLines={1}
            allowFontScaling={false}
            style={styles.tagTextStyle}>
            {item.tag}
          </Text>
        </View>
        <View style={styles.contactInnerListWrapper}>
          {item.data.map((i, subIndex) => {
            return (
              <TouchableOpacity activeOpacity={0.8} onPress={()=>onPressContacts()} style={styles.innerCardWrapper}>
                {/* Constact list title Wrapper */}
                <View style={styles.flex1}>
                  <Text
                    numberOfLines={2}
                    allowFontScaling={false}
                    style={styles.innerCardTextStyle}>
                    {i.name}
                  </Text>
                </View>
                {/* like {Heart}  button Wrapper */}
                <View style={styles.likeBtnWrapper}>
                  <TouchableOpacity
                    onPress={() => onPressLikeButton(index, subIndex)}>
                    <Image source={Constants.Images.Heart_gray_icon} />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };

  const listHeaderCmponent = () => {
    return (
      <View style={styles.headerContainer}>
        {/* main search header container */}
        <View style={styles.headerInnerContainer}>
          <View style={styles.headerMainContainer}>
            {/* serach Icon  */}
            <View style={styles.searchButtonContainer}>
              <Image source={Constants.Images.Search_gray_icon} />
            </View>
            {/* title text */}
            <View style={styles.headerTitleContainer}>
              <Text
                allowFontScaling={false}
                style={styles.headerTitleTextStyle}>
                Search
              </Text>
            </View>
          </View>
          {/* filterButton Container */}
          <TouchableOpacity
            onPress={() => setFilterModalVisible(true)}
            style={styles.filterButtonContainer}>
            <Image source={Constants.Images.Filter_icon} />
          </TouchableOpacity>
        </View>
        {/* filtered List Wrapper */}
        <View style={styles.filtersWrapper}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* status bar */}
      <StatusBar
        backgroundColor={Constants.Colors.themeColor_Opacity_20}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
          {/* Main Header */}
          <HeaderComponent
            mainTitle={'Face Call'}
            rightTitle={'關閉'}
            backButton={true}
            onPressBackButton={() => navigation.goBack()}
          />
          {/* TE Team Cards */}
          <View style={styles.TECardWrapper}>
            {/* TE card Heading */}
            <HeadingComponentGray
              headingTitle={'選擇TE Team'}
              headingTextColor={Constants.Colors.text_black}
              showAll={false}
              showInfo={false}
            />
            {/* TE Card Inner Wrapper */}
            <View style={styles.TECardInnerWrapper}>
              {/* TE card Component */}
              <TE_TeamCard />
            </View>
          </View>
          {/* Face Call Horizontal list */}
          <View style={{paddingTop: 25}}>
            {/* Face Call Header */}
            <HeadingComponentGray
              headingTitle={'選取Face Call對象'}
              showAll={false}
              showInfo={false}
            />
            {/* Face call Container */}
            <View style={styles.faceCallWrapper}>
              <FlatList
                data={dummy_faceCall_data}
                renderItem={renderFaceCallItem}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </View>
          {/* Searchable List Card */}
          <View style={styles.searchableListWrapper}>
            {/* Searchable List card Heading */}
            <HeadingComponentGray
              headingTitle={'選取歌曲'}
              showAll={false}
              showInfo={false}
            />
            {/* Searchable List Inner Card */}
            <View style={styles.serachableListInnerWrapper}>
              {/* Contact List Card */}
              <View style={styles.contactListWrapper}>
                <FlatList
                  ListHeaderComponent={listHeaderCmponent}
                  data={contact_data}
                  renderItem={renderListItem}
                  keyExtractor={(item) => item.id}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {/* Filter Modal */}
      <BottomSlideModal
        isVisibleModal={filterModalVisible}
        filterView={true}
        onCloseFunction={() => setFilterModalVisible(false)}
      />
    </View>
  );
};

export default FaceCallTEScreen;
