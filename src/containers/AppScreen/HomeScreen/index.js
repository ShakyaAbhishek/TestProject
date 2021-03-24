import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import Constants from '../../../constants';
import {
  Image_Carousel,
  HomeTabMenu,
  PointsCard,
  AlertModal,
  OnlineEventsComponent,
  HeadingComponent,
  HeadingComponentGray,
  CornorImageWrapper,
  IncommingEventComponent,
  GraphBarContainer,
} from '../../../components';
import styles from './style';

type props = {
  navigation: Object,
};

const progressPercentage = '0%';

const image_slider_data = [
  Constants.Images.slider_dummy_image,
  Constants.Images.slider_dummy_image,
  Constants.Images.slider_dummy_image,
  Constants.Images.slider_dummy_image,
];

const horizontal_menu = [
  {
    title: 'CAP',
    icon: Constants.Images.Cap_tab_icon,
    id: 1,
  },
  {
    title: '電話美語',
    icon: Constants.Images.Call_tab_icon,
    id: 2,
  },
  {
    title: 'Face Call',
    icon: Constants.Images.Face_call_tab_icon,
    id: 3,
  },
  {
    title: '美語活動',
    icon: Constants.Images.Tri_star_tab_icon,
    id: 4,
  },
  {
    title: '線上美語活動',
    icon: Constants.Images.Tri_play_tab_icon,
    id: 5,
  },
  {
    title: 'WFC Library',
    icon: Constants.Images.WFC_tab_icon,
    id: 6,
  },
  {
    title: '家庭 成長學苑',
    icon: Constants.Images.User_star_tab_icon,
    id: 7,
  },
  {
    title: 'Mom & Dad Video',
    icon: Constants.Images.Mom_dad_tab_icon,
    id: 8,
  },
  {
    title: '點數兌換',
    icon: Constants.Images.Point_exchange_tab_icon,
    id: 9,
  },
  {
    title: 'Director Video',
    icon: Constants.Images.DVideo_tab_icon,
    id: 10,
  },
  {
    title: '新手上路',
    icon: Constants.Images.Novice_guideline_tab_icon,
    id: 11,
  },
];

const HomeScreen = ({navigation}: props) => {

  const [openAlertModal, setOpenAlertModal] = useState(false);

  const onHomeTabPress = (item) => {
    if( item.id === 3) {
      navigation.navigate('FaceCallScreen');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar
            backgroundColor={Constants.Colors.themeColor}
            barStyle="light-content"
          />
      <SafeAreaView style={styles.container1}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image slider  */}
        <View style={styles.imageSlider}>
          <Image_Carousel data={image_slider_data} />
        </View>
        {/* Menu Tabs */}
        <View style={styles.menuTabStyle}>
          <HomeTabMenu onPressTabButton={(item)=>onHomeTabPress(item)} data={horizontal_menu} />
        </View>
        {/* Points Card */}
        <View style={styles.pointsCardStyle}>
          <TouchableOpacity activeOpacity={0.9} onPress={()=>setOpenAlertModal(true)}>
          <PointsCard progressPercentage={progressPercentage} />
          </TouchableOpacity>
        </View>
        {/* Graph Card */}
        <View
          style={{
            marginTop: 12,
            marginHorizontal: 16,
            borderRadius: 10,
            paddingTop: 24,
            paddingHorizontal: 24,
            backgroundColor: Constants.Colors.commonWhite_Color,
            paddingBottom: 20,
          }}>
            {/* working */}
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                height: 72,
                width: 72,
                justifyContent:'center',
                alignItems:'center',
                borderRadius: 36,
              }}>
                <Image source={Constants.Images.Graph_card_user_icon}  />
              </View>
            <View style={{flex: 1, paddingLeft: 15}}>
              <Text style={{fontSize:22, lineHeight:28, fontWeight:'700', color:Constants.Colors.text_gray_black}}>Kid1</Text>
              <Text style={{fontSize:10, lineHeight:16, fontWeight:'400',color:Constants.Colors.opcity_38_text_color}}>10 歲 1 個月</Text>
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text style={{fontSize:14, lineHeight:20, fontWeight: '400', color: Constants.Colors.text_gray_black}}>本月已申請 <Text style={{fontWeight:'700', color:Constants.Colors.themeColor}}>0</Text> 次</Text>
              <Text style={{fontSize:14, lineHeight:20, fontWeight: '400', color: Constants.Colors.text_gray_black}}>剩餘 <Text style={{fontWeight:'700', color:Constants.Colors.themeColor}}>0</Text> 次</Text>
            </View>
          </View>
          {/*  */}
          <View
            style={{
              height: 170,
              width: '100%',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              flexDirection: 'row',
              marginTop: 10,
            }}>
              {/* first */}
              <GraphBarContainer
               title={'藍色'} 
               totalPoints={95}
               earnedPoints={95}
               themeColor={'#62B5E5'}
               themeOpacityColor={'#62B5E526'}
               capIcon={Constants.Images.cap1_icon}
               fillingPercentage={'100%'}
               barHeight={30}
               />
               {/* Second */}
               <GraphBarContainer
               title={'深藍'} 
               totalPoints={102}
               earnedPoints={17}
               themeColor={'#0058B7'}
               themeOpacityColor={'#0058B726'}
               capIcon={Constants.Images.cap2_icon}
               fillingPercentage={'30%'}
               barHeight={40}
               />
               {/* third */}
               <GraphBarContainer
               title={'綠色'} 
               totalPoints={56}
               earnedPoints={4}
               themeColor={'#00B140'}
               themeOpacityColor={'#00B14026'}
               capIcon={Constants.Images.cap3_icon}
               fillingPercentage={'10%'}
               barHeight={50}
               />
               {/* forth */}
               <GraphBarContainer
               title={'淺綠'} 
               totalPoints={85}
               earnedPoints={2}
               themeColor={'#97D700'}
               themeOpacityColor={'#97D70026'}
               capIcon={Constants.Images.cap4_icon}
               fillingPercentage={'10%'}
               barHeight={60}
               />
               {/* Fifth */}
               <GraphBarContainer
               title={'黃色'} 
               totalPoints={35}
               earnedPoints={0}
               themeColor={'#FED241'}
               themeOpacityColor={'#FED24126'}
               capIcon={Constants.Images.cap5_icon}
               fillingPercentage={'0%'}
               barHeight={70}
               />
               {/* Sixth */}
               <GraphBarContainer
               title={'畢業'} 
               totalPoints={8}
               earnedPoints={0}
               themeColor={'#FF6900'}
               themeOpacityColor={'#FF690026'}
               capIcon={Constants.Images.cap6_icon}
               fillingPercentage={'0%'}
               barHeight={80}
               />
               
              {/* <View style={{ height:70, width:'16%', justifyContent:'center', alignItems:'center'}}>
                <View style={{height:'100%', width:'80%', backgroundColor:'#0058B726'}}> 
                <View style={{height:'0%', width:'100%', backgroundColor:'#0058B7', position:'absolute', zIndex:0.5, bottom:0}}>
                
                </View>
                <View style={[styles.triangleCorner,{position:'absolute', zIndex:1, top:-9, left:-2}]} />
                </View>
              </View>
              <View style={{ height:80, width:'16%', justifyContent:'center', alignItems:'center'}}>
                <View style={{height:'100%', width:'80%', backgroundColor:'#00B14026'}}> 
                <View style={{height:'0%', width:'100%', backgroundColor:'#00B140', position:'absolute', zIndex:0.5, bottom:0}}>
                
                </View>
                <View style={[styles.triangleCorner,{position:'absolute', zIndex:1, top:-9, left:-2}]} />
                </View>
              </View>
              <View style={{ height:90, width:'16%', justifyContent:'center', alignItems:'center'}}>
                <View style={{height:'100%', width:'80%', backgroundColor:'#97D70026'}}> 
                <View style={{height:'0%', width:'100%', backgroundColor:'#97D700', position:'absolute', zIndex:0.5, bottom:0}}>
                
                </View>
                <View style={[styles.triangleCorner,{position:'absolute', zIndex:1, top:-9, left:-2}]} />
                </View>
              </View>
              <View style={{ height:100, width:'16%', justifyContent:'center', alignItems:'center'}}>
                <View style={{height:'100%', width:'80%', backgroundColor:'#FED24126'}}> 
                <View style={{height:'0%', width:'100%', backgroundColor:'#FED241', position:'absolute', zIndex:0.5, bottom:0}}>
                
                </View>
                <View style={[styles.triangleCorner,{position:'absolute', zIndex:1, top:-9, left:-2}]} />
                </View>
              </View>
              <View style={{ height:110, width:'16%', justifyContent:'center', alignItems:'center'}}>
                <View style={{height:'100%', width:'80%', backgroundColor:'#FF690026'}}> 
                <View style={{height:'0%', width:'100%', backgroundColor:'#FF6900', position:'absolute', zIndex:0.5, bottom:0}}>
                
                </View>
                <View style={[styles.triangleCorner,{position:'absolute', zIndex:1, top:-9, left:-2}]} />
                </View>
              </View> */}
          </View>
        </View>
        {/* 切換至電話美語 (Cornor Image View) */}
        <View style={styles.incommingEventWrapper}>
          <HeadingComponentGray
            headingTitle={'切換至電話美語'}
            showAll={false}
            showInfo={false}
          />
          <View style={styles.incommingCardWrapper}>
            <CornorImageWrapper>
              <IncommingEventComponent />
            </CornorImageWrapper>
          </View>
        </View>
        {/* 最新 Online Event  View*/}
        <View style={styles.onlineEventWrapper}>
          <HeadingComponentGray
            headingTitle={'最新 Online Event'}
            showAll={true}
            showInfo={false}
          />
          <OnlineEventsComponent />
        </View>
      </ScrollView>
      </SafeAreaView>
      <AlertModal headingText={'活動電子票尚未提供'} contentText={'已經報名的活動，由於活動票務建立作業時間，將於活動到來的七天前起，經由系統提供給會員查閱！謝謝！'} multiButtons={false} isVisibleModal={openAlertModal} onCloseFunction={()=>setOpenAlertModal(false)} />
    </View>
  );
};

export default HomeScreen;
