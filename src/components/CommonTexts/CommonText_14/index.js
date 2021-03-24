import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './style';

type props = {
    value: String,
    numberOfLines: Number,
    textColor: String,
}

const CommonText_14 = ({value, numberOfLines,textColor}: props) => {
    return (
        <View>
            <Text numberOfLines={numberOfLines} allowFontScaling={false} style={[styles.textStyle, {color:textColor}]}>{value}</Text>
        </View>
    );
};


export default React.memo(CommonText_14);
