//게좌등록 확인 
//CenterAuthAuthorizeCase3.java
//center_auth_authorize_case3.xml

import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function CenterAuthorizeCase3({navigation}: {navigation: any}) {
    //const navigation = useNavigation();
  
    return (
      <View style={styles.centeralign}>
            <Text>(2)인증생략(CASE3) : 유효한 접속토큰을 이용하여 본인인증 절차 생략(본인인증생략 + ARS 조회/출금동의).</Text>
            <Text>(2)최초인증(CASE3) : 기 등록된 계좌를 재확인하고 토클재발급. 유효한 접속토큰을 이용하여 본인인증생략</Text>
            <Text>추가</Text>
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container :{
      flex:1,
      padding:10
      // alignItems:'center',
      // justifyContent:'center',
    },
    centeralign:{
      flex:1,
      alignItems:'center', // 가로 가운데 정렬
      justifyContent:'center', // 세로 가운데 정렬
    }
  })
  
  export default CenterAuthorizeCase3;