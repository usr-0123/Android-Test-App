import React from "react";
import { StyleSheet } from "react-native";

const AppStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding:10,
      justifyContent: 'center',
      borderRadius:10,
    },
    profile: {
      alignItems: 'center',
      justifyContent: 'space-evenly',
    },
    profileUser: {
        width:'100%',
        justifyContent: 'center'
    },
    profileInputs: {
        height: 300,
    },
    innerContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
    },
    textInput: {
      padding: 10,
      backgroundColor: '#f1f1f1',
      color: '#000',
      marginTop: 10,
      width: 350,
      textAlign: 'left',
    },
    image: {
      width: 200,
      height: 200,
      marginTop: 20,
    },
    itemContainer: {
      borderWidth: 1,
      borderColor: '#ccc',
      padding: 10,
      marginVertical: 5,
      width: '100%',
      justifyContent: 'flex-start'
    }
  });

  export default AppStyles;