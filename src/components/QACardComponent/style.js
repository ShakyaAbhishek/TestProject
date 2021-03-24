import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  contanier: {
    backgroundColor: Constants.Colors.white_color,
    marginTop: '16@ms',
    padding: '24@ms',
    borderRadius: '10@ms',
    elevation: 3,
  },
  questionTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    textAlign: 'left',
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
    color: Constants.Colors.text_black,
  },
  answerWrapper: {paddingTop: '20@ms'},
  answerTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
    textAlign: 'left',
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    color: Constants.Colors.text_black,
  },
});

export default styles;
