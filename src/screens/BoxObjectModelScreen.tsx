import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.title}>
    Dimencione Screen
    </Text>
  </View>
  );
};
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //marginHorizontal: 16,
    backgroundColor: 'red',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    fontSize:20,
    borderWidth: 10,
    width:250,
  },
});

