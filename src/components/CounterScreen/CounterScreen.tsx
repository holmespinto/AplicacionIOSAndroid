import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import { BtnTouchable } from '../BtnTouchable/BtnTouchable';

export const CounterScreen = () => {
  const [count, setCount] = useState(10);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 16,
    },
    title: {
      textAlign: 'center',
      marginVertical: 8,
      fontSize:49,
    },
    fixToText: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
    fab:{
      backgroundColor: '#737373',
      width:60,
      height:60,
      borderRadius: 100,
      justifyContent: 'center',
    },
    fabText:{
      alignSelf: 'center',
      marginVertical: 8,
      fontSize:25,
      color: 'white',
    },
  });
  // eslint-disable-next-line react/no-unstable-nested-components
  const Separator = () => <View style={styles.separator} />;
  return (<>
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Count {count}
      </Text>

    </View>
    <Separator />
    <View>
      <View style={styles.fixToText}>
        <BtnTouchable setCount={setCount} count={count} signo={'+'} />
        <BtnTouchable setCount={setCount} count={count} signo={'-'} />
      </View>
    </View>
  </SafeAreaView>
  </>);



};
