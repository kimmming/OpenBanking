//게좌등록 확인 
//center_auth_authorize_case1.xml
//common_auth_authorize_case.xml
import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';


function CenterAuthAccount({navigation}: {navigation: any}) {
    //const navigation = useNavigation();
  
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
      }}>
            <Text>(0)최초인증(CASE1) : 처음 오픈플래폼에 접속하는 사용자의 가입 및 인증 처리(본인인증 + ARS 조회/출금동의)</Text>
            <Text>(0)최초인증(CASE1) : 기 등록된 계좌를 재확인하고 토클재발급. 사용자정보 미보유시(본인인증 + 계좌내역확인)</Text>
            <Text>반환 형태(고정):</Text>
            <Text>이용기관 ID:</Text>
            <Text>콜백 URL:</Text>
            <Text>토큰권한범위:</Text>
            <Text>이용기관 임의정보:</Text>
            <Text>난수값:</Text>
            <Text>사용자인증 타입구분:</Text>
            <Text>언어:</Text>
            <Text>계좌소유인증 사용여부:</Text>
            
        </View>
    );
  }
  
  
  export default CenterAuthAccount;