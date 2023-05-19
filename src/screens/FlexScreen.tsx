import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const FlexScreen = () => {

  return (<>
    <View style={styles.container}>
        <Text style={styles.caja1}>caja 1</Text>
        <Text style={styles.caja2}>caja 2</Text>
        <Text style={styles.caja3}>caja 3</Text>
    </View>

  </>);
};
const styles = StyleSheet.create({
    container:{
       //width:'50%',
       //height:'100%',
       flex: 1,
       backgroundColor:'blue',
       flexDirection:'row',
       alignItems: 'flex-end',
       justifyContent:'flex-end',
    },
  caja1: {
    borderColor:'red',
    borderWidth:2,
    fontSize:30,
  },
  caja2: {
    borderColor:'#ff8080',
    borderWidth:2,
    fontSize:30,
  },
  caja3: {
    borderColor:'#00c400',
    borderWidth:2,
    fontSize:30,
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
