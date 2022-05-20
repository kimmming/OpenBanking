//사용자 인증 페이지 공통
//CenterAuthAuthorizeFragment.java
//center_auth_authorize.xml -> 상단바
//Case 1과 3으로 나뉨 : 호출 :addtab


import React,{Component, ReactElement} from 'react';
import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function  CenerAuthAuthorize({navigation}: {navigation: any}) {
    //const navigation = useNavigation();
  
    return (
      <View style={styles.centeralign}>
            <Text>위에 버튼이 있고 아래에 
              addtab으로 CenterAuthAuthorizeCase1, 3를 불러옴
              
            </Text>
            
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

  export default CenerAuthAuthorize;