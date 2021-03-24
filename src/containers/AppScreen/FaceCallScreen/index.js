import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Constants from '../../../constants';
import {
  HeadingComponentGray,
  FaceCallBigCard,
  HeaderComponent,
  SongListComponent,
  TwoButtonAlertModal,
} from '../../../components';
import styles from './style';

type props = {
  navigation: Object,
};

const alertContentText = `家庭成員全體將切換至FaceCall，
切換後至少需要使用30天，
再由您選擇切換回去喔～

是否要切換到Face Call？`;

const FaceCallScreen = ({navigation}: props) => {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [slide_btn_status, setSlide_btn_status] = useState(false);
  const [call_btn_status, setcall_btn_status] = useState(true);
  return (
    <View style={styles.topContainer}>
      {/* define Status bar */}
      <StatusBar
        backgroundColor={Constants.Colors.themeColor_Opacity_20}
        barStyle="dark-content"
      />
      {/* Main Container Start */}
      <SafeAreaView style={styles.container}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          {/* Header Component */}
          <HeaderComponent
            mainTitle={'Face Call'}
            rightTitle={'關閉'}
            backButton={false}
          />
          {/* Face Call Cards */}
          <View style={styles.faceCardsWrapper}>
            {/* Face Call Heading */}
            <HeadingComponentGray
              headingTitle={'Face Call'}
              rightHeadingTitle={'Face Call Q&A'}
              showAll={false}
              showInfo={true}
            />
            <View style={styles.faceCardsInnerWrapper}>
              {/* Face Call Big Card */}
              <FaceCallBigCard
                cardImage={Constants.Images.User_color_icon}
                cardTitle={'TE Team'}
                onPressCard={() => navigation.navigate('FaceCallTEScreen')}
              />
              <FaceCallBigCard
                cardImage={Constants.Images.Song_list_icon}
                cardTitle={'Song List'}
                onPressCard={() => navigation.navigate('FaceCallQAScreen')}
              />
            </View>
          </View>
          {/* Song List Card */}
          <View style={styles.songListWrapper}>
            {/* Song list Heading */}
            <HeadingComponentGray
              headingTitle={'本月精選 Song List'}
              showAll={false}
              showInfo={false}
            />
            <View style={styles.songListInnerWrapper}>
              {/* Song List Component */}
              <SongListComponent />
            </View>
          </View>
          <View style={styles.sliderButtonCardWrapper}>
            {/* Slider Button Card Heading */}
            <HeadingComponentGray
              headingTitle={'切換至電話美語'}
              rightHeadingTitle={'介紹與規則'}
              showAll={false}
              showInfo={true}
            />
            {/* Slider Card */}
            <View style={styles.sliderButtonInnerWrapper}>
              <View style={styles.sliderCardStyle}>
                <Text style={styles.sliderCardTextStyle}>
                  切換後便可以直接使用，每週一次，您將可以與美語叔叔阿姨們直接透過電話練習美語喔。
                </Text>
                {/* slider Button Wrapper */}
                <View
                  style={[
                    styles.sliderButtonWrapper,
                    {
                      backgroundColor: slide_btn_status
                        ? '#00000008'
                        : Constants.Colors.themeColor_Opacity_20,
                    },
                  ]}>
                    {/* Left Button  */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    disabled={slide_btn_status}
                    onPress={() => setcall_btn_status(true)}
                    style={[
                      styles.sliderLeftButtonStyle,
                      {
                        backgroundColor: call_btn_status
                          ? slide_btn_status
                            ? '#00000008'
                            : Constants.Colors.themeColor
                          : null,
                      },
                    ]}>
                      {/* Left Button Text */}
                    <Text
                      allowFontScaling={false}
                      style={[
                        styles.sliderLetBtnTextStyle,
                        {
                          color: call_btn_status
                            ? slide_btn_status
                              ? Constants.Colors.opcity_38_text_color
                              : '#ffffff'
                            : Constants.Colors.opcity_38_text_color,
                        },
                      ]}>
                      Face Call
                    </Text>
                  </TouchableOpacity>
                  {/* Right Button  */}
                  <TouchableOpacity
                    onPress={() => setcall_btn_status(false)}
                    disabled={slide_btn_status}
                    activeOpacity={0.8}
                    style={[
                      styles.sliderRightButtonStyle,
                      {
                        backgroundColor: call_btn_status
                          ? null
                          : Constants.Colors.themeColor,
                      },
                    ]}>
                      {/* Right Button Text */}
                    <Text
                      allowFontScaling={false}
                      style={[
                        styles.sliderRightBtnTextStyle,
                        {
                          color: call_btn_status
                            ? Constants.Colors.opcity_38_text_color
                            : '#ffffff',
                        },
                      ]}>
                      電話美語
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        {/* Alert Modal */}
        <TwoButtonAlertModal
          headingText={'目前會員使用權限為電話美語，是否切換至Face Call?'}
          contentText={alertContentText}
          multiButtons={true}
          isVisibleModal={openAlertModal}
          onCloseFunction={() => setOpenAlertModal(false)}
        />
      </SafeAreaView>
    </View>
  );
};

export default FaceCallScreen;
