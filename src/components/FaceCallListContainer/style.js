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
      headerContainer: {paddingVertical: '24@ms'},
      headerTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        color: Constants.Colors.text_gray_black,
      },
      listTitleTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        textAlign:'center'
      },
      listImageWrapper: {
        height: '64@ms',
        width: '64@ms',
        borderRadius: '32@ms',
        borderWidth: '3@ms',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.1,
        shadowRadius: 0.9,
        elevation: 3,
      },

      listImageStyle: {height: '100%', width: '100%', borderRadius: '32@ms'},

      listContainer: {justifyContent: 'center', alignItems: 'center'},

      listTextWrapper: {paddingTop: '6@ms', paddingBottom: '30@ms'},

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
        paddingBottom: '40@ms'
      },
});

export default styles;