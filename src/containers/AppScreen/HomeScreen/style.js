import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../../constants';
const styles = ScaledSheet.create({
  container1: {
    flex: 1,
    backgroundColor: Constants.Colors.themeColor_Opacity_20,
  },
  container: {
    flex: 1,
    // backgroundColor: Constants.Colors.themeColor,
  },
  imageSlider: {height: '290@ms', width: '100%'},
  menuTabStyle: {width: '100%', marginTop: '14@ms'},
  pointsCardStyle: {
    marginTop: '34@ms',
    marginBottom: '12@ms',
    paddingHorizontal: '16@ms',
  },
  onlineEventWrapper: {paddingTop: '26@ms'},
  incommingEventWrapper: {paddingTop: '22@ms'},
  incommingCardWrapper: {
    marginTop: '11@ms',
    paddingHorizontal: '16@ms',
  },
  // -----------------------Test------------------------
  trapezoid: {
    transform: [
      {
        rotate: '270 deg',
      },
    ],
    width: 90,
    height: 0,
    borderBottomWidth: 45,
    borderBottomColor: 'transparent',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 20,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
  },
  trapezoid1: {
    transform: [
      {
        rotate: '270 deg',
      },
    ],
    width: 90,
    height: 0,
    borderBottomWidth: 45,
    borderBottomColor: 'red',
    borderLeftWidth: 0,
    borderLeftColor: 'transparent',
    borderRightWidth: 0,
    borderRightColor: 'transparent',
    borderStyle: 'solid',
  },
  triangleCorner: {
    transform: [{rotate: '15 deg'}],
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderRightWidth: 50,
    borderTopWidth: 25,
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});

export default styles;
