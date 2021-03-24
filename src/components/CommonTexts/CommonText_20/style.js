import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
    textStyle:{
        // fontFamily:'',
        fontWeight:'700',
        fontSize:Constants.CommonFontStyle.FONT_SIZE_20,
        lineHeight:Constants.CommonFontStyle.LINE_HEIGHT_28,
        // textAlign:'center',
    }
});

export default styles;
