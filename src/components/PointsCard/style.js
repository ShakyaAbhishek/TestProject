import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    height: 96,
    borderRadius: 10,
    elevation: 1,
    backgroundColor: Constants.Colors.commonWhite_Color,
  },
  cardWrapper: {
    flex: 1,
    paddingLeft: '11@ms',
    paddingTop: '6@ms',
    paddingBottom: '8@ms',
  },
  imageContainer: {
    height: '81@ms',
    width: '93@ms',
    paddingTop: '5@ms',
  },
  pointsTextStyle: {
    fontSize: 44,
    lineHeight: '52@ms',
    color: Constants.Colors.themeColor,
    fontWeight: '600',
    textAlign: 'center',
  },
  starImageWrapper: {
    height: '100%',
    width: '100%',
  },
  rightWrapper: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderWrapper: {
    paddingTop: '25@ms',
    width: '218@ms',
  },
  progressBarWrapper: {paddingVertical: '10@ms', paddingHorizontal: '20@ms'},
  progressBarLinestyle: {
    height: '4@ms',
    width: '100%',
    backgroundColor: '#e7e7e7',
    borderRadius: '0@ms',
  },
  completeLineStyle: {
    height: '4@ms',
    width: '1%',
    marginHorizontal: '20@ms',
    backgroundColor: Constants.Colors.themeColor,
    borderRadius: '0@ms',
    position: 'absolute',
    top: '10@ms',
    bottom: '0@ms',
    zIndex: 1,
  },
  rangTextStyle: {
    fontSize:Constants.CommonFontStyle.FONT_SIZE_12,
    fontWeight:Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_16,
    color: Constants.Colors.opcity_38_text_color,
  },
});

export default styles;