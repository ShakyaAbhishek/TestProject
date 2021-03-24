import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: Constants.Colors.themeColor_Opacity_20,
  },
  flex1: {flex: 1},
  TECardWrapper: {paddingTop: '26@ms'},
  TECardInnerWrapper: {paddingTop: '11@ms', paddingHorizontal: '16@ms'},
  faceCallWrapper: {paddingTop: '10@ms'},
  searchableListWrapper: {paddingTop: '23@ms'},
  serachableListInnerWrapper: {
    paddingTop: '11@ms',
    paddingBottom: '20@ms',
    paddingHorizontal: '16@ms',
  },
  contactListWrapper: {
    width: '100%',
    borderRadius: '10@ms',
    paddingVertical: '16@ms',
    backgroundColor: Constants.Colors.white_color,
  },
  // Contact list Styles
  contactListContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: '29@ms',
  },
  tagWrapper: {
    width: '52@ms',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10@ms',
  },
  tagTextStyle: {
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    lineHeight: 52,
    fontSize: 50,
    color: Constants.Colors.themeColor,
  },
  contactInnerListWrapper: {flex: 1, paddingLeft: '21@ms'},
  innerCardWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '17@ms',
    borderBottomWidth: '1@ms',
    borderBottomColor: Constants.Colors.opcity_38_text_color,
  },
  likeBtnWrapper: {paddingRight: '10@ms'},
  innerCardTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
    textAlign: 'left',
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    color: Constants.Colors.text_gray_black,
  },
  // Contact list Search Header Container Style
  headerContainer: {paddingHorizontal: '24@ms'},
  headerInnerContainer: {
    height: '48@ms',
    borderRadius: '24@ms',
    borderWidth: '1@ms',
    borderColor: Constants.Colors.opcity_38_text_color,
    paddingHorizontal: '10@ms',
    flexDirection: 'row',
    width: '100%',
  },
  headerMainContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchButtonContainer: {height: '24@ms', width: '24@ms', paddingTop: '1@ms'},
  headerTitleContainer: {paddingLeft: '5@ms'},
  headerTitleTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    color: Constants.Colors.opcity_38_text_color,
  },
  filterButtonContainer: {
    height: '48@ms',
    position: 'absolute',
    width: '48@ms',
    justifyContent: 'center',
    alignItems: 'center',
    right: 10,
  },
  filtersWrapper: {minHeight: '43@ms', width: '100%'},
  // face call horizontal list styles
  faceCallContainer: {
    marginHorizontal: '16@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCardWrapper: {
    height: '64@ms',
    width: '64@ms',
    borderRadius: '10@ms',
    borderWidth: '4@ms',
  },
  imageCardImageStyle: {height: '100%', width: '100%', borderRadius: '10@ms'},
  imageCardShadow: {flex: 1, backgroundColor: '#E3C4A930'},
  titleWrapper: {paddingTop: '6@ms'},
  titleTextStyle: {
    fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
    lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
    fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
    textAlign: 'center',
    color: Constants.Colors.themeColor,
  }
});

export default styles;
