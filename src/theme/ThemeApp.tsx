/* eslint-disable quotes */
/* eslint-disable eol-last */

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
        //marginHorizontal: 16,
        //paddingHorizontal:10,
      },
      caltop:{
        flex: 1,
        paddingHorizontal:20,
        backgroundColor: 'green',
        justifyContent: 'flex-end',
      },
      calContainer:{
        //flex: 1,
        paddingHorizontal:20,
        backgroundColor: 'black',
        justifyContent: 'flex-end',
      },
      result:{
        fontSize:60,
        color:'white',
        textAlign:'right',
        marginBottom:20,
      },
      resulthijo:{
        fontSize:30,
        color:'rgba(255,255,255,0.5)',
        textAlign:'right',
      },
      row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        paddingHorizontal:10,

      },
      header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color:'white',
        },


});