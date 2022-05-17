import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';



function HomeScreen({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    }}>
          <Text>선택 화면 - 센터인증 또는 자체 인증</Text>
          <Button
            title = "센터 인증"
            onPress={()=>
              navigation.navigate('center')}
              //CenterAuthHome으로
          />
          <Button
            title = "자체인증"
            onPress={()=>
              navigation.navigate('self')}
              //SelfAuthHome으로
          />
      </View>
  );
}


export default HomeScreen;