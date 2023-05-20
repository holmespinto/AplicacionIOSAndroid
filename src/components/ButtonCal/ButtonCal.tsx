/* eslint-disable eol-last */
/* eslint-disable comma-dangle */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
 
interface Props {
    title:string,
    bgcolor?:string,
    textcolor?:string,
    ancho?:boolean,
    numero?:string,
    action: (numeroText:string| undefined) => void;
}
export const ButtonCal = ({bgcolor = '#9B9B9B',title,textcolor = 'black',ancho = false,action,numero}:Props) => {
   const numeroText = (title === 'del') ? numero : title; 
  return (<>
  <TouchableOpacity onPress={()=>action(numeroText)}>
    <View style={{...styles.button, 
        backgroundColor:( bgcolor === '#9B9B9B' ) ?  '#87A6A6' : bgcolor,
        width: (ancho) ? 180 : 80
        }} >
    <Text style={{...styles.buttonText,
        color:( textcolor === 'black' ) ?  'black' : 'white'
        }}
        >{title}</Text>
  </View>
  </TouchableOpacity>
  </>);
};


export const styles = StyleSheet.create({
button:{
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    //
  },
  buttonText:{
    fontSize: 20,
    fontWeight: 'bold',
   //padding:10,
  },
})