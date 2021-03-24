import {ScaledSheet} from 'react-native-size-matters';

const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row', 
        paddingLeft: '40@ms', 
        paddingRight: '28@ms'
    },
    leftContainer: {flex: 1},
    rightContainer: {
        flexDirection: 'row', 
        justifyContent:'center', 
        alignItems:'center'
    },
    arrowContainer: {marginLeft:'14@ms'}
});

export default styles;