import {StyleSheet} from 'react-native';
import {Colors} from '../../../utils';
import {moderateScale, scale} from '../../../utils/scale';

const Styles = StyleSheet.create({
  container:{
    height: scale(100),
    width:'95%',
    flexDirection:'column',
    marginVertical:scale(10),
    marginHorizontal:scale(10),
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: scale(12),
    shadowColor: Colors.COLOR_BROWN,
    shadowOffset: {
      width: scale(4),
      height: scale(4),
    },
    shadowRadius: scale(5),
    shadowOpacity: 0.3,
    elevation: scale(5),
  },
  
  content: {
    backgroundColor: Colors.COLOR_WHITE,
    borderRadius: scale(12),
    justifyContent:'space-between',
    height: '100%',
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:'5%'

  },
  details:{
    width:'100%',
    paddingHorizontal:scale(10),
  },
  colorView:{
    marginLeft: moderateScale(10),
    marginVertical:scale(10),
    height:scale(15),
    width:scale(15),
    borderRadius:scale(7)
  },
  image: {
    height: scale(50),
    width: scale(50),
    resizeMode:'stretch',
    alignSelf:"center",
    bottom:scale(3)
  },
  deleteIcon: {
    height: scale(25),
    width: scale(25),
    resizeMode:'stretch',
    alignSelf:"flex-end",
    bottom:scale(3),
    right:10
  },
  imageView:{
    height: scale(70),
    width: scale(70),
    borderRadius: scale(35),
    resizeMode:'stretch',
    borderWidth:scale(3),
    borderColor: Colors.COLOR_LIGHTBROWN,
    alignItems:'center',
    justifyContent:'center',
  },
  title:{
    width: '40%',
    marginTop:scale(10),
  },
  titleTxt: {
    marginLeft: moderateScale(10),
    width: '70%',
fontSize:16
  },
 
  btnStle: {
    position: 'absolute',
    right: moderateScale(10),
    top: scale(10),
    height:25,
  },
  stepper:{
    height:40,
    width:200,
    position:'absolute',
    right:0,
    flexDirection:'row',
    bottom:0
  }
});

export default Styles;
