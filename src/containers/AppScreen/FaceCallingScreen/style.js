import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.themeColor_Opacity_20,
  },
  flex1: {flex: 1},
  callDetailCardWrapper: {
    flex: 1,
    backgroundColor: Constants.Colors.white_color,
    borderRadius: '10@ms',
    marginTop: '17@ms',
    marginHorizontal: '16@ms',
  },
  bottomCardWrapper: {
    paddingVertical: '45@ms',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '40@ms',
  },
  bottomButtonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    color: Constants.Colors.themeColor,
    textAlign: 'center',
  },
  callCardHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '17@ms',
    marginHorizontal: '22@ms',
  },
  likeButtonWrapper: {position: 'absolute', right: 0},
  callIconWrapper: {justifyContent: 'center', alignItems: 'center', paddingBottom:'30@ms'},
  callIconSize: {height: '100@ms', width: '100@ms'},
  imageStyle: {height: '100%', width: '100%'},
  userImageWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '38@ms',
    paddingTop: '11@ms',
  },
  userTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_20,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_28,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    color: Constants.Colors.text_gray_black,
    textAlign: 'center',
  },
  bottomButtonImageContainer: {
      height:'40@ms', 
      width:'40@ms', 
  },
  messageTextStyle :{
    fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    color: Constants.Colors.text_gray_black,
    textAlign: 'center',
  },

});

export default styles;
