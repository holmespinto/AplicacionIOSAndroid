import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

  interface Props {
    setCount: (arg0: number) => void,
    count: number,
    signo: string
  }

export const BtnTouchable = (props:Props ) => {

  const styles = StyleSheet.create({
    fab:{
      backgroundColor: '#737373',
      width:60,
      height:60,
      borderRadius: 100,
      justifyContent: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    fabText:{
      alignSelf: 'center',
      marginVertical: 8,
      fontSize:25,
      color: 'white',
    },
  });
/*background={TouchableNativeFeedback.Ripple('Black',false, 30)}*/
  return (<>
  <View>
    <TouchableOpacity style={styles.fab}
          onPress={() => props.setCount( props.signo === '+' ? props.count + 1 : props.count - 1)}
        ><Text style={styles.fabText}>{props.signo}</Text>
    </TouchableOpacity>
    </View>
    </>);
};
