import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    height: '32@ms',
    marginTop: '16@ms',
    marginLeft: '16@ms',
    borderRadius: '20@ms',
    flexDirection: 'row',
    paddingHorizontal: '5@ms',
    borderWidth: '1@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTextContainer: {paddingHorizontal: '7@ms'},
  btnTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_12,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_16,
    textAlign: 'center',
  },
});

export default styles;
