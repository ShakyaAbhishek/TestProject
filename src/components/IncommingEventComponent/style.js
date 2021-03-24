import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    paddingLeft: '24@ms',
    paddingTop: '32@ms',
    paddingBottom: '31@ms',
    paddingRight: '20@ms',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  leftImageContainer: {height: '72@ms', width: '72@ms'},
  leftImageStyle: {height: '100%', width: '100%'},
  leftImageContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  midContainer: {
      flex: 1, 
      paddingTop: '5@ms', 
      paddingHorizontal: '16@ms'
  },
  titleTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    letterSpacing: '0.8@ms',
    textAlign:'left',
    color: Constants.Colors.text_gray_black,
  },
  rightContainer: {
      justifyContent: 'center', 
      alignItems: 'center'
  },
  rightButtonWrapper: {
    backgroundColor: Constants.Colors.button_red_color,
    paddingHorizontal: '15@ms',
    paddingTop: '5@ms',
    borderRadius: '20@ms',
    paddingBottom: '7@ms',
  },
  buttonText: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    letterSpacing: '0.8@ms',
    textAlign:'center',
    color: '#ffffff',
  }
});

export default styles;