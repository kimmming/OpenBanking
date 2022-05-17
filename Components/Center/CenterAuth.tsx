//fragement_center_auth.xml

import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function CenterAuth({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
          <Text>계좌등록 및 토큰 발급</Text>
          <Button
            title = "신규 계좌등록 후 토큰발급"
            onPress={()=>
              navigation.navigate('centerAuthAccount')}
          />
          <Button
            title = "기존 계좌확인 후 토큰발급"
            onPress={()=>
            navigation.navigate('centerAuthorize')}
          />
          <Button
            title = "OOB 토큰발급(2-legged)"
            // onPress={()=>
            //   navigation.navigate('self')}
          />
      </View>
  );
}


export default CenterAuth;