/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { TareaScreen } from './src/screens/TareaScreen';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (<>
  <SafeAreaView style={{flex: 1,backgroundColor:'#28425B',}}>
    <TareaScreen/>
    </SafeAreaView>
    </> );
};
