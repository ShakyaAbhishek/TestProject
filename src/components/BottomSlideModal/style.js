import { ScaledSheet } from 'react-native-size-matters';
import Constants from '../../constants';
 
const styles = ScaledSheet.create({
   container:{
       flex:1,
       margin: 0,
       padding:0,
       elevation:3,
       backgroundColor:'transparent',
       justifyContent:'flex-end',
   },
   modalContainer: {
       maxHeight: '80%',
       width: '100%',
       backgroundColor: '#ffffff',
       elevation: 3,
       borderTopRightRadius: '20@ms',
       borderTopLeftRadius: '20@ms',
    //    margin: '40@ms',
    //    paddingBottom:'0@ms'
     },
});
 
export default styles;
