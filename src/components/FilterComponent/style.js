import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    container:{
      margin:'40@ms',
      marginBottom:'0@ms'
    },
    cardHeadingTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_20,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_28,
        color: Constants.Colors.text_gray_black,
      },
      mainContainer: { paddingBottom:'40@ms'},
      filterWrapper: {flexDirection: 'row'},
      filterTitleContainer: {
        marginTop: '16@ms',
        height: '32@ms',
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleTextStyle : {
        fontSize:Constants.CommonFontStyle.FONT_SIZE_14,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        color: Constants.Colors.text_gray_black
      },
      filterListWrapper: {flex: 1, flexDirection: 'row', flexWrap: 'wrap'},
      resetButtonWrapper: {flexDirection:'row', paddingVertical:'34@ms', alignItems:'center'},
      resetButtonTextWrapper: {paddingLeft:'9@ms'},
    // button CSS
    buttonContainer: {
        height: '40@ms',
        width: '123@ms',
        borderRadius: '20@ms',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.Colors.button_red_color,
      },
      buttonContainer1: {
        height: '40@ms',
        width: '123@ms',
        borderRadius: '20@ms',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.Colors.white_color,
        borderWidth:'2@ms',
        borderColor:Constants.Colors.button_red_color
      },
      buttonTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        textAlign: 'center',
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
        color: Constants.Colors.white_color,
      },
      buttonTextStyle1: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        textAlign: 'center',
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
        color: Constants.Colors.button_red_color,
      },
      buttonWrapper: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:'5@ms',
        paddingBottom:'40@ms'
      },
});

export default styles;