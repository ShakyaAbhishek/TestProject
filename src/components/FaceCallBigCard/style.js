import { ScaledSheet } from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    teamCardStyle: {
        width:'48%',
        paddingTop: '60@ms',
        justifyContent:'center', 
        alignItems:'center',
        borderRadius: '10@ms',
        backgroundColor: '#ffffff',
      },
      cardInnerWrapper: {
        paddingTop: '19@ms',
        paddingBottom: '20@ms',
        alignItems: 'center',
      },
      cardTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
        color: Constants.Colors.themeColor,
      }
});

export default styles;