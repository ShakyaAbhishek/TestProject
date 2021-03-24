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

const FaceCallingScreen = ({navigation}: props) => {
  const [filterModalVisible, setFilterModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* status bar */}
      <StatusBar
        backgroundColor={Constants.Colors.themeColor_Opacity_20}
        barStyle="dark-content"
      />
      <SafeAreaView style={styles.flex1}>
        {/* <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}> */}
          {/* Main Header */}
          <HeaderComponent
            mainTitle={'Face Call'}
            rightTitle={'按鈕'}
            backButton={true}
            onPressBackButton={() => navigation.goBack()}
          />
          <View style={styles.callDetailCardWrapper}>
            <View style={styles.callCardHeaderWrapper}>
                <TouchableOpacity onPress={()=>setFilterModalVisible(true)} style={{flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
                    <Text allowFontScaling={false} style={styles.userTextStyle}>Alana</Text>
                    <Image source={Constants.Images.Down_arrow_icon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.likeButtonWrapper}>
                    <Image source={Constants.Images.Heart_gray_icon} />
                </TouchableOpacity>
            </View>
            <View style={{paddingTop:11, justifyContent:'center', alignItems:'center'}}>
                <Text allowFontScaling={false} style={styles.messageTextStyle}>Clap Your Hands!</Text>
            </View>
            <View style={styles.userImageWrapper}>
                {/* <View style={{height:306, width:306}}> */}
                    <Image resizeMode={'contain'} style={styles.imageStyle} source={Constants.Images.Dummy_call_img}/>
                {/* </View> */}
            </View>
            <View style={styles.callIconWrapper}>
                <View style={styles.callIconSize}>
                <Image resizeMode={'contain'} style={styles.imageStyle} source={Constants.Images.Green_call_icon} />
                </View>
                <Text allowFontScaling={false} style={styles.messageTextStyle}>立即呼叫</Text>
            </View>
          </View>
          <View style={styles.bottomCardWrapper}>
            <View style={styles.bottomButtonWrapper}>
                <View style={styles.bottomButtonImageContainer}>
                <Image resizeMode={'contain'} style={styles.imageStyle} source={Constants.Images.Big_contact_card_icon} />
                </View>
                <View>
                    <Text style={styles.bottomButtonTextStyle}>Face Call</Text>
                </View>
            </View>
            <View style={styles.bottomButtonWrapper}>
                <View style={styles.bottomButtonImageContainer}>
                <Image resizeMode={'contain'} style={styles.imageStyle} source={Constants.Images.Big_user_group_icon} />
                </View>
                <View>
                    <Text style={styles.bottomButtonTextStyle}>TE Team</Text>
                </View>
            </View>
            <View style={styles.bottomButtonWrapper}>
                <View style={styles.bottomButtonImageContainer}>
                <Image resizeMode={'contain'} style={styles.imageStyle} source={Constants.Images.Small_song_list_icon} />
                </View>
                <View>
                    <Text style={styles.bottomButtonTextStyle}>Song List</Text>
                </View>
            </View>
          </View>
        {/* </ScrollView> */}
      </SafeAreaView>
      {/* Filter Modal */}
      <BottomSlideModal
        isVisibleModal={filterModalVisible}
        filterView={false}
        onCloseFunction={() => setFilterModalVisible(false)}
      />
    </View>
  );
};

export default FaceCallingScreen;
