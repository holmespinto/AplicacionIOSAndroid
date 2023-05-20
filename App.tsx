/* eslint-disable jsx-quotes */
import React from 'react';
import { CalculadoraScreen } from './src/screens/CalculadoraScreen';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { styles } from './src/theme/ThemeApp';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
      backgroundColor='black'
      barStyle='light-content'
      />
    <View>
      <CalculadoraScreen />
    </View>
    </SafeAreaView>
  );
};
