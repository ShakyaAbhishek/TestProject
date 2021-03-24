import {ScaledSheet} from 'react-native-size-matters';
import Constants from '../../constants';

const styles = ScaledSheet.create({
    container: {
        paddingTop: '11@ms',
        paddingHorizontal: '16@ms'
    },
    container1: {
        marginHorizontal: '16@ms',
        paddingVertical: '10@ms',
        paddingHorizontal: '22@ms',
        borderRadius: '10@ms',
        width: '100%',
        backgroundColor: Constants.Colors.commonWhite_Color,
        alignSelf: 'center',
        marginBottom:'20@ms'
    },
    cardInnerWrapper: {
        height: '88@ms',
        backgroundColor: 'white',
        width: '100%',
        flexDirection: 'row',
        justifyContent:'center',
    },
    imageStyles: {
        height:'100%', 
        width:'100%',
        borderRadius:'10@ms'
    },
    imageWrapper:{
        height: '80@ms',
        width: '99@ms',
        borderRadius:'10@ms',
        alignSelf:'center'
    },
    imageWrapper1: {
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'
    },
    titleWrapper: { 
        flex:1, 
        borderBottomColor:'#e7e7e7', 
        marginLeft:'16@ms', 
        justifyContent:'center', 
        alignItems:'center', 
        borderBottomWidth:2
    },
    titleTextStyle: {
        textAlign:'left',
        letterSpacing:'0@ms',
        lineHeight: Constants.CommonFontStyle.LINE_HEIGHT_20,
        fontWeight: Constants.CommonFontStyle.FONT_WEIGHT_REGULAR,
        fontSize: Constants.CommonFontStyle.FONT_SIZE_16,
        color: Constants.Colors.text_gray_black
    }
});

export default styles;

// //styleName: English/Body_regular_en;
// font-family: Arimo;
// font-size: 16px;
// font-style: normal;
// font-weight: 400;
// line-height: 20px;
// letter-spacing: 0px;
// text-align: left;
