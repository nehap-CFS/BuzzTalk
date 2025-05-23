import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  chatimg: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  wrap: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FDFAF6',
    elevation: 10,
  },
  innerwrap: {
    marginBottom: 10,
    marginTop: 15,
  },
  innertimewrap: {
    marginTop: 15,
    marginBottom: 10,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
  },
  chat: {
    color: '#333',
  },
  timeofchat: {
    color: 'green',
  },
  count: {
    backgroundColor: 'lightgreen',
    height: 30,
    width: 30,
    padding: 5,
    borderRadius: 15,
    position: 'absolute',
    top: 24,
    right: 2,
  },
  modalname: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 10,
    marginLeft: 20,
  },
  modalimg: {
    height: 200,
    width: 200,
    margin: 'auto',
    borderRadius: 100,
    elevation: 10,
    marginTop: 5,
  },
  modalwrap: {
    backgroundColor: 'white',
    height: 300,
    width: 300,
    borderRadius: 10,
  },
  modalcontainer: {
    flex: 1,
    elevation: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  closemodal: {
    padding: 10,
    textAlign: 'center',
    height: 40,
    width: 40,
    backgroundColor: '#F6DC43',
    fontSize: 18,
    borderRadius: 30,
    marginLeft: 82,
  },
  nameclosewrap: {
    flexDirection: 'row',

    marginTop: 10,
  },
  round: {
    width: 105,
    height: 105,
    borderRadius: 100,
    borderColor: '#B7B7B7',
    borderWidth: 6,
  },
  roundnotseen: {
    width: 105,
    height: 105,
    borderRadius: 100,
    borderColor: 'lightgreen',
    borderWidth: 6,
  },
  mystatuspic: {
    height: 94,
    width: 94,
    borderRadius: 50,
    objectFit: 'cover',
  },
  statuswrap: {
    backgroundColor: 'white',
    flex: 1,

    // flexDirection:"row",
    // justifyContent:'space-between',
  },
  iconimgwrap: {
    marginTop: 15,
    flexDirection: 'row',
  },
  icon: {
    marginTop: 40,
  },
  time: {
    marginTop: 30,
    marginLeft: 16,
    color: '#333',
  },
  mymodal: {
    backgroundColor: '#FDFAF6',
    flex: 1,
  },
  mycaption: {
    textAlign: 'center',
    margin: 'auto',
    fontSize: 28,
  },
  timing: {
    textAlign: 'center',
    fontSize: 15,
    marginLeft: -60,
  },
  mymodalwrap: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 20,
  },
  miniimg: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginRight: 14,
  },
  mininame: {
    fontSize: 18,
  },
  back: {
    marginTop: 10,
    marginRight: 14,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newStatusModal: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 20,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
    marginBottom: 15,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#F6DC43',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  peoplestatus: {
    display: 'flex',
  },
  peoplestatusimg: {
    height: 94,
    width: 94,
    borderRadius: 50,
  },
  peoplewrap: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  peoplestatuswrap: {
    marginTop: 100,
    flex: 1,
    marginLeft: 10,
  },
  mystatusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: -80,
    marginLeft: 10,
  },
  peoplecircle: {
    height: 105,
    width: 105,
    borderRadius: 60,
    borderWidth: 6,
    borderColor: '#B7B7B7',
  },
  peopledesc: {
    marginTop: 30,
    marginLeft: 10,
  },
  recupdate: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
    marginBottom: 10,
  },
  peoplename: {
    fontWeight: '700',
    color: '#333',
    fontSize: 17,
  },
  callwrap: {
    backgroundColor: 'white',
    flex: 1,
  },
  call: {},
  fav: {
    flexDirection: 'row',
  },
  favhead: {
    fontSize: 29,
    fontWeight: '500',
    marginBottom: 20,
    marginLeft: 20,
  },
  iconwrap: {
    height: 50,
    width: 50,
    backgroundColor: '#F6DC43',
    borderRadius: 40,
    padding: 5,
    marginLeft: 20,
  },
  addfav: {
    fontSize: 20,
    alignSelf: 'center',
    marginLeft: 10,
  },
  backcall: {
    marginTop: 40,
    marginLeft: 20,
    color: '#333',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // dim background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '85%',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    elevation: 5,
  },
  input: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    fontSize: 16,
  },
  addButtonText: {
    backgroundColor: '#F6DC43',
    color: 'white',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
    fontSize: 16,
    fontWeight: 'bold',
    overflow: 'hidden',
  },
  favlist: {
    backgroundColor: '#FFFA8D',
    width: 380,
    margin: 'auto',
    marginTop: 10,
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
  },
  calls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    marginTop: 10,
  },
  favlistwrap: {},
  nametime: {
    marginTop: 20,
  },
  imgname: {
    flexDirection: 'row',
  },
  callimage: {
    height: 80,
    width: 80,
    borderRadius: 40,
  },
  searchbar: {
   fontSize:18,
   color:"white"
  },
  searchwrap:{
    flexDirection:"row",
    padding:10,
    backgroundColor:"#4E6688",
    marginTop:10,
    marginBottom:10,
    margin:"auto",
    width:390,
    elevation:4,
    borderRadius:5
  }
  ,searchicon:{
    marginTop:13,
    marginRight:5
  }
});
