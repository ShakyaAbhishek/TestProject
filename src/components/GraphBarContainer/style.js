import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    container: {

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
    borderRightWidth: '50@ms',
    borderTopWidth: '25@ms',
    borderRightColor: 'transparent',
    borderTopColor: 'white',
  },
});

export default styles;