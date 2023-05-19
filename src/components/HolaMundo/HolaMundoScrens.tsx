/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
export const HolaMundoScrens = () => {
  return (<>
    <View style={{
        flex:1,
        //backgroundColor:'red',
        justifyContent: 'center',
      }}>
       <Text style={{
          fontSize:45,
          textAlign: 'center',
        }}>Hola mundo!</Text>
      </View>
      </>);
};
