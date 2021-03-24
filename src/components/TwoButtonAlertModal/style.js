import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    borderRadius: '10@ms',
    backgroundColor: Constants.Colors.white_color,
    paddingBottom: '10@ms',
  },
  infoImageWrapper: {position: 'absolute',},
  bodyContainer: {
      paddingTop: '20@ms',
      paddingBottom: '24@ms',
      paddingHorizontal:'24@ms',
      borderRadius: '10@ms', 
      backgroundColor:'#ffffff90',
  },
  headingTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_20,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_28,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    color: Constants.Colors.text_gray_black,
  },
  contentTextWrapper: {paddingTop: '19@ms'},
  contentTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    color: Constants.Colors.text_gray_black,
  },
  buttonWrapper: {
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal:'5@ms',
    marginTop: '30@ms',
  },
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
  }

});

export default styles;
