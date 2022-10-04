import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
    backgroundColor: 'white'
  },
  imagecontainer: {
    height: 200,
  },
  heading: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#383838',
    marginTop: -30,
    textAlign: 'center'
  },
  subheading: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 18,
    paddingBottom: 2,
    color: '#383838'
  },
  weightinput: {
    marginVertical: 0,
    width: 300,
    padding: 1,
    textAlign: 'center',
    borderBottomColor: '#383838',
    borderBottomWidth: 2,
    fontSize: 18
  },
  borderBottom: {
    borderBottomColor: '#383838',
    borderBottomWidth: 2
  },
  result: {
    fontSize: 20,
    padding: 15,
    marginTop: 15,
    fontSize: 35,
    fontWeight: 'bold',
    textAlign: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderWidth: 5,
    borderColor: '#383838'
  },
  calculateBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 3,
    backgroundColor: '#383838',
    marginBottom: 50,
    elevation: 15,
    shadowColor: 'black',
    padding: 20
  },
  calculateBtnText: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    color: 'white',
  },
  radioBtnOuterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingLeft: 30,
    paddingBottom: 10
  },
  radioBtnInnerContainer: {
    alignItems: 'center',
    flexDirection: 'row'
  },
  radioText: {
    marginRight: 6,
    fontSize: 15
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: '#383838',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRadioButton: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: '#383838',
  },
  accelometer: {
    flex: 1,
    aspectRatio: 1.5, 
    resizeMode: 'contain',
  },
  needle: {
    flex: 1,
    height: 120, 
    resizeMode: 'contain',
    position: 'absolute',
    top: 106,
    bottom: 0,
    left: -81,
    right: 0,
    transform: [{ rotate: '-90deg'}],
  },
  needlegreen: {
    flex: 1,
    height: 120, 
    resizeMode: 'contain',
    position: 'absolute',
    top: 84,
    bottom: 0,
    left: -74,
    right: 0,
    transform: [{ rotate: '-65deg'}],
  },
  needleyellow: {
    flex: 1,
    height: 120, 
    resizeMode: 'contain',
    position: 'absolute',
    top: 53,
    bottom: 0,
    left: -26,
    right: 0,
  },
  needlered: {
    flex: 1,
    height: 120, 
    resizeMode: 'contain',
    position: 'absolute',
    top: 86,
    bottom: 0,
    left: 25,
    right: 0,
    transform: [{ rotate: '68deg'}],
  },
});