import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
  topContainer: {
    flex: 1,
    backgroundColor: Constants.Colors.themeColor_Opacity_20,
  },
  container: {
    flex: 1,
  },
  faceCardsWrapper: {paddingTop: '26@ms'},
  faceCardsInnerWrapper: {
    width:'100%',
    flexDirection: 'row',
    paddingTop: '11@ms',
    paddingHorizontal: '16@ms',
    justifyContent: 'space-between',
  },
  songListWrapper: {paddingTop: '25@ms'},
  songListInnerWrapper: {marginTop: '11@ms', paddingHorizontal: '16@ms'},
  sliderButtonCardWrapper: {paddingVertical: '25@ms'},
  sliderButtonInnerWrapper: {marginTop: '11@ms', paddingHorizontal: '16@ms'},
  sliderCardStyle: {
    backgroundColor: Constants.Colors.white_color,
    borderRadius: '10@ms',
    padding: '24@ms',
  },
  sliderCardTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    color: Constants.Colors.text_black,
    textAlign: 'left',
  },
  sliderButtonWrapper: {
    marginTop: '20@ms',
    padding: '4@ms',
    alignSelf: 'center',
    borderRadius: '20@ms',
    flexDirection: 'row',
  },
  sliderLeftButtonStyle: {
    height: '40@ms',
    width: '87@ms',
    borderRadius: '20@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderLetBtnTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  sliderRightButtonStyle: {
    height: '40@ms',
    width: '87@ms',
    borderRadius: '20@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderRightBtnTextStyle: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: '700',
    textAlign: 'center',
  }
});

export default styles;
