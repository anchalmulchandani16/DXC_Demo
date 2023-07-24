import { StyleSheet } from 'react-native';
import { Colors } from '../../utils';
import { moderateScale, scale } from '../../utils/scale';
const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.COLOR_WHITE,

  },
  emptyList: { justifyContent: 'center', alignItems: 'center' },
  header: {
    fontSize: 20,
  },
  listView: {
    backgroundColor: Colors.COLOR_LIGHTBROWN,
    width: scale(40),
    height: scale(40),
    borderRadius: scale(25),
    position: 'absolute',
    right: scale(10),
    bottom: '8%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  flatListStyle:{
    marginBottom:moderateScale(40)
  },
  inputView: {
    borderColor: Colors.COLOR_BROWN,
    backgroundColor: Colors.COLOR_STONE,
    borderRadius: 12,
    justifyContent: 'space-between',
    width: '95%',
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 30,
    overflow: 'hidden',
    alignSelf: 'center'
  },
  sectionStyle: {
    height: scale(40),
    width: '100%',
    flexDirection: 'column',
    paddingVertical: scale(10),
    paddingHorizontal: scale(20),
    backgroundColor: Colors.COLOR_WHITE,
    shadowColor: Colors.COLOR_BROWN,
    shadowOffset: {
      width: scale(4),
      height: scale(4),
    },
    shadowRadius: scale(5),
    shadowOpacity: 0.3,
    elevation: scale(5),
  }


});

export default Styles;
