//토큰발급(2-legged) 요청
//oob/centerAuthTokenRequestOob.java
//token_request_oob.xml

import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function CenterAuthTokenRequestOob({navigation}: {navigation: any}) {
    //const navigation = useNavigation();
  
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}>
            <Text>이용기관 토큰발급(2-legged)</Text>
                
        </View>
    );
  }
  
  
  export default CenterAuthTokenRequestOob;