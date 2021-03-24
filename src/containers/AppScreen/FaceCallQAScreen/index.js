import React from 'react';
import {View, Text, Image, FlatList, TouchableOpacity, StatusBar, ScrollView, SafeAreaView, ImageBackground} from 'react-native';
import Constants from '../../../constants';
import {HeaderComponent, HeadingComponentGray, QaCardComponent} from '../../../components';
import styles from './style';

type props = {
    
}

const QA_Data = [
  {
    id:1,
    Question:'什麼是Face Call?',
    Answer:'美語叔叔阿姨會以視訊電話的方式錄製影片與孩子互動，可降低孩子使用電話的緊張感。不需要預約也不需要等待的時間，可以隨時隨地在喜歡的時間無限次數地觀賞。',
  },
  {
    id:2,
    Question:'使用Face Call需要費用嗎?',
    Answer:'寰宇家庭不會收取額外費用，若您使用4G/5G觀看，會依各大電信公司規定被收取網路通信費用。',
  },
  {
    id:3,
    Question:'使用Face Call可以累積學習點數嗎?',
    Answer:'不適用學習點數服務。',
  },
  {
    id:4,
    Question:'當我從「電話美語」切換成「Face Call」之後，可以再使用「電話美語」嗎?',
    Answer:`可以。切換後，只要使用「Face Call」30天以上，就可以根據您的需求再切換回電話美語模式。
    切換日期範例：在3/5從「電話美語」，切換為「Face Call」，最快可於4/6再度切換為「電話美語」。`,
  },
  {
    id:5,
    Question:'從「Face Call」切換到「電話美語」以後，就可以馬上使用「電話美語」嗎?',
    Answer:'可以，切換之後，馬上就可以預約報名「電話美語」。',
  },
  {
    id:6,
    Question:'從「Face Call」切換到「電話美語」以後，就可以馬上使用「電話美語」嗎?',
    Answer:'可以，切換之後，馬上就可以預約報名「電話美語」。',
  },
  {
    id:7,
    Question:'我可以幫老大及老二報名不同的服務嗎?（例：老大使用「電話美語」/老二使用「Face Call」）',
    Answer:'使用「Face Call」的期間，所有「電話美語」相關服務都會暫停，包含一般電話美語練習、CAP電話美語、Free Conversation。',
  },
  {
    id:8,
    Question:'影片看到一半停了，或是無法再播放了怎麼辦?',
    Answer:'因為是利用網路播放的影片，請確認您的網路環境在正常狀態下（WIFI或4G訊號）；若還是沒有改善，請關閉並重新開啟APP登入或是重新下載。重新下載並不會讓資料消失，您可以安心刪除APP。',
  },
]

const FaceCallQAScreen  = ({}:props) => {


  const renderQAItem = ({item, index}) => {
    return(
      //  Q&A component
      <QaCardComponent item={item} />
    )
  }

    return(
        <View style={styles.container}>
            {/* define Status bar */}
      <StatusBar
        backgroundColor={Constants.Colors.themeColor_Opacity_20}
        barStyle="dark-content"
      />
      {/* Main Container Start */}
      <SafeAreaView style={styles.flex1}>
        <ScrollView style={styles.flex1} showsVerticalScrollIndicator={false}>
          {/* Header Component */}
          <HeaderComponent
            mainTitle={'Face Call Q&A'}
            rightTitle={'關閉'}
            backButton={false}
          />
          {/* Main Body */}
          <View style={styles.questionMainWrapper}>
          <HeadingComponentGray
              headingTitle={'切換至電話美語'}
              headingTextColor={Constants.Colors.text_black}
              showAll={false}
              showInfo={false}
            />
            {/* Header Image Contaienr */}
            <View style={styles.videoWrapper}>
                <ImageBackground source={Constants.Images.QA_Dummy_image} imageStyle={{height:'100%', width:'100%', borderRadius:10}} style={{height:221, width:'100%', borderRadius:10, justifyContent:'center', alignItems:'center'}} >
                   {/* Play Icon Image */}
                    <Image source={Constants.Images.Play_big_icon_Orange_img} />
                </ImageBackground>
            </View>
          </View>
          <View style={styles.mainWrapper1}>
            <HeadingComponentGray
              headingTitle={'切換至電話美語'}
              headingTextColor={Constants.Colors.text_black}
              showAll={false}
              showInfo={false}
            />
            {/* Q&A Main Container */}
            <View style={styles.mainWrapper2}>
              <FlatList 
                data={QA_Data}
                renderItem={ renderQAItem }
                keyExtractor={item=>item.id}
                showsVerticalScrollIndicator={false}
              />
            </View>
          </View>
          </ScrollView>
          </SafeAreaView>
        </View>
    )
}

export default FaceCallQAScreen;