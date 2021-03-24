import { ScaledSheet } from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    container: {
        width: '100%',
        borderRadius: '10@ms',
        paddingVertical: '10@ms',
        paddingHorizontal: '20@ms',
        backgroundColor: '#ffffff',
      },
      cardWrapper: {
        height: '82@ms',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardLeftWrapper: {
        height: '84@ms',
        width: '99@ms',
        borderRadius: '10@ms',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardImageStyle: {height: '100%', width: '100%', borderRadius: '2@ms'},
      cardRightWrapper: {
        flex: 1,
        borderBottomWidth: '1@ms',
        marginLeft: '16@ms',
        paddingRight: '10@ms',
        borderBottomColor: Constants.Colors.opcity_38_text_color,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      cardRightWrapper1: {
        flex: 1,
        marginLeft: '16@ms',
        paddingRight: '10@ms',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      titleWrapper: {flex: 1, paddingVertical: '18@ms'},
      titleTextStyle: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 20,
        color: Constants.Colors.text_gray_black,
      },
      detailTextStyle: {
        fontSize: 12,
        marginTop: 8,
        fontWeight: '700',
        lineHeight: 16,
        color: Constants.Colors.text_gray_black,
      }
});

export default styles;