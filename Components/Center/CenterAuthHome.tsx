import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function CenterAuthHome({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
          <Text>센터인증 메인화면 - 계좌등록 및 API 거래기능</Text>
          <Button
            title = "계좌 등록"
            onPress={()=>
            navigation.navigate('centerAuth')} //<- 링크
          />
          <Button
            title = "API 거래 기능"
            // onPress={()=>
            //   navigation.navigate('user')}
          />
      </View>
  );
}


export default CenterAuthHome;