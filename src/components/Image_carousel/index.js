import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import Indicator from '../ImageSlider/Indicator';
import Constants from '../../constants';
import styles from './style';

type props = {
    data: Object
}

const Image_Carousel = ({data}:props) => {
    const [sliderIndex, setSliderIndex] = useState(0);

    return (
        <View style={styles.container}>
            <SliderBox
            style={{height: 250}}
            sliderBoxHeight={'100%'}
            images={data}
            dotColor={Constants.Colors.themeColor}
            inactiveDotColor={Constants.Colors.commonWhite_Color}
            autoplay={true}
            imageLoadingColor={Constants.Colors.themeColor}
            autoplayInterval={3000}
            currentImageEmitter={(index) => setSliderIndex(index)}
            circleLoop={true}
            dotStyle={{
              width: 0,
              height: 0,
              borderRadius: 4,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
            }}
          />
          {/* Slider indicator */}
          <View style={{alignSelf: 'center'}}>
            <Indicator
              itemCount={data.length}
              currentIndex={sliderIndex % data.length}
              indicatorStyle={{}}
              indicatorContainerStyle={{
                marginTop: 18,
              }}
              indicatorActiveColor={Constants.Colors.themeColor}
              indicatorInActiveColor={Constants.Colors.commonWhite_Color}
              indicatorActiveWidth={20}
              style={{...styles.indicator}}
            />
          </View>
        </View>
    );
};


export default React.memo(Image_Carousel);
