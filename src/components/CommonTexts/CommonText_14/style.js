import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
    textStyle:{
        // fontFamily:Constants.CommonFontStyle.FONT_FAMILY_REGULAR,
        fontSize:Constants.CommonFontStyle.FONT_SIZE_14,
        lineHeight:Constants.CommonFontStyle.LINE_HEIGHT_20,
        textAlign: 'center',
        fontWeight:'500'
    }
});

export default styles;
