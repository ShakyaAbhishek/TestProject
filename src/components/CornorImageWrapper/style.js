import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    width: '100%',
    alignSelf: 'center',
    backgroundColor: Constants.Colors.commonWhite_Color,
    borderTopRightRadius: '10@ms',
    borderBottomLeftRadius: '10@ms',
  },
  topImageStyle: {position: 'absolute', top: 0, left: 0, zIndex: 1},
  bottomImageStyle: {position: 'absolute', bottom: 0, right: 0, zIndex: 1}
});

export default styles;
