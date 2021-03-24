import { ScaledSheet } from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
    container:{
        flex:1,
        backgroundColor: Constants.Colors.themeColor_Opacity_20,
    },
    flex1: {
        flex:1
    },
    videoWrapper: {paddingTop:'11@ms', paddingHorizontal:'16@ms'},
    questionMainWrapper: {paddingTop:'26@ms'},
    mainWrapper1: {paddingTop: '19@ms'},
    mainWrapper2: {paddingHorizontal:'16@ms'}
});

export default styles;