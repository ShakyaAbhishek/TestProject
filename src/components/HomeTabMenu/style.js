import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {},
  tabRenderListContainer: {
    width: '83@ms',
    alignItems: 'center',
    alignContent: 'center',
  },
  imageWrapperStyle: {
    height: '64@ms',
    width: '64@ms',
    borderRadius: '32@ms',
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: Constants.Colors.commonWhite_Color,
  },
  imageStyle: {
    height: '32@ms',
    width: '32@ms',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle1: {height: '100%', width: '100%'},
  textWrapper: {marginTop: '14@ms', justifyContent:'center', alignItems:'center'},
});

export default styles;
