import React from 'react';
import {StyleSheet, View} from 'react-native';

export const PositionScreen = () => {

  return (<>
    <View style={styles.container}>
        <View style={styles.cajaMorada}/>
        <View style={styles.cajaNaranja}/>
    </View>

  </>);
};
const styles = StyleSheet.create({
    container:{
       //width:'50%',
       //height:'100%',
       flex: 1,
       backgroundColor:'#d6e49a',
    },
  cajaMorada: {
    backgroundColor:'#8080ff',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'white',
  },
  cajaNaranja: {
    backgroundColor:'#ff8080',
    width:100,
    height:100,
    borderWidth:2,
    borderColor:'white',
  },
   /*
  cajaNaranja: {
    backgroundColor: 'orange',
    width:'10%',
    height:'10%',
  },
  title:{
    textAlign: 'center',
    fontSize: 30,
  }
  */
});
