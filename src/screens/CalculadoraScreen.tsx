/* eslint-disable @typescript-eslint/no-shadow */

import React, { useState } from 'react';
import { Text, View} from 'react-native';
import { styles } from '../theme/ThemeApp';
import { ButtonCal } from '../components/ButtonCal/ButtonCal';



export const CalculadoraScreen = () => {
  const [numeroAnterior, setAnterior] = useState('0');
  const [numero, setNumero] = useState('0');
  const clear = () => {
    setNumero('0');
    setAnterior('0');
  };

  const btndelete = ( numero : string)  => {
    if (numero.length === 0) {
      setNumero('0');
    }
    setNumero(numero.slice(0, -1));
  };
  const armarNumero = ( numeroText : string ) => {
    //no aceptar doble punto
    if (numero.includes('.') && numeroText === '.') {return;}
     //no aceptar doble punto
    if (numero.startsWith('0') || numero.startsWith('-0')) {
      //puntodecimal
      if (numeroText === '.'){
      } else if (numero.startsWith('0')) {
        setNumero(numeroText);
        //evaluar si hay ceros y hay un punto
      } else if (numeroText === '0' && numero.includes('.')) {
        setNumero(numero + numeroText);
        //evaluar si es diferente de cero y tiene un punto
      } else if ( numeroText === '0' && !numero.includes('.')) {
        setNumero(numeroText);
        //evaluar 0.000
      } else if (numeroText === '0' && !numero.includes('.')) {
        setNumero(numero);
      } else {
        setNumero(numero + numeroText);
      }
    } else {
      setNumero(numero + numeroText);
    }
  };
  const positivoNegativo = () => {
     if (numero.includes('-')){
      setNumero(numero.replace('-',''));
     } else {
      setNumero('-' + numero);
     }
  };
    return (
    <>
    <View style={styles.calContainer}>
        <Text style={styles.header}>Calculator</Text>
        <Text style={styles.resulthijo}>{numeroAnterior}</Text>
        <Text style={styles.result}
        numberOfLines={1}
        adjustsFontSizeToFit
        >{numero}</Text>

        {/*PRIMER FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'C'}    action={clear}/>
          <ButtonCal title={'+/-'}  action={positivoNegativo}/>
          <ButtonCal title={'del'}  action={btndelete} numero={numero}/>
          <ButtonCal title={'%'}    action={clear} textcolor={'white'} bgcolor={'#FF9427'}/>
        </View>

        {/*II FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'7'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'8'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'9'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'X'} bgcolor={'#FF9427'} action={clear}/>
        </View>
                {/*III FILA*/}
        <View style={styles.row}>
          <ButtonCal title={'4'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'5'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'6'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'-'} bgcolor={'#FF9427'} action={clear} />
        </View>
                {/*IV FILA*/}
         <View style={styles.row}>
          <ButtonCal title={'1'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'2'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'3'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'+'} bgcolor={'#FF9427'} action={clear}/>
        </View>
                  {/*V FILA*/}
                  <View style={styles.row}>
          <ButtonCal title={'0'} bgcolor={'#335050'} ancho action={armarNumero}/>
          <ButtonCal title={'.'} bgcolor={'#335050'} action={armarNumero}/>
          <ButtonCal title={'='} bgcolor={'#FF9427'} action={clear} />
        </View>
      </View></>
  );
};
