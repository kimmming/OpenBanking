//사용자 인증 페이지
//fragment_center_auth_authorize

import React,{Component, ReactElement} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function  CenerAuthAuthorize({navigation}: {navigation: any}) {
    //const navigation = useNavigation();
  
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}>
            <Text>사용자 인증페이지 기능 빼고 공백 맞음</Text>
            
        </View>
    );
  }
  
  
  export default CenerAuthAuthorize;