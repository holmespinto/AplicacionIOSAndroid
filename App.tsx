/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { FlexScreen } from './src/screens/FlexScreen';
import { SafeAreaView } from 'react-native';

export const App = () => {
  return (<>
  <SafeAreaView style={{flex: 1}}>
    <FlexScreen/>
    </SafeAreaView>
    </> );
};
