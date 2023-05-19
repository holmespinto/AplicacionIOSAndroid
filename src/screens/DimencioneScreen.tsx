import React from 'react';
import {StyleSheet, View,Text, useWindowDimensions } from 'react-native';

export const DimencioneScreen = () => {
//const {width,height} = Dimensions.get('window');
const {width,height} = useWindowDimensions();
  return (<>
   <View>
    <View style={styles.container}>
        <View style={{
            ...styles.cajaMorada,
            width:width * 0.20,
        }}/>
        <View style={styles.cajaNaranja} />
    </View>
    </View>
    <View><Text style={styles.title}>w:{width} - h:{height}</Text></View>
  </>);
};
const styles = StyleSheet.create({
    container:{
       //width:'50%',
       height:'100%',
       backgroundColor:'red',
    },
  cajaMorada: {
    backgroundColor: 'yellow',
    width:'50%',
    height:'50%',
  },
  cajaNaranja: {
    backgroundColor: 'orange',
    width:'10%',
    height:'10%',
  },
  title:{
    textAlign: 'center',
    fontSize: 30,
  }
});
