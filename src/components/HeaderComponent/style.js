import { ScaledSheet } from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    withBackBtnWrapper: {
        paddingHorizontal: '16@ms',
        paddingVertical: '10@ms',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      rightTitleTextStyle: {
        fontSize: Constants.CommonFontStyle.FONT_SIZE_14,
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_BOLD,
        color: Constants.Colors.text_gray_black,
      },
      withoutBackButtonWrapper: {
        paddingHorizontal: '16@ms',
        paddingVertical: '10@ms',
        alignSelf: 'flex-end',
      },
      mainContainer: {paddingTop: '13@ms', paddingHorizontal: '16@ms'},
      mainContainerTextStyle: {
        fontSize: 50,
        lineHeight: 52,
        fontWeight: '400',
        color: Constants.Colors.themeColor,
      }
});

export default styles;