import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { color } from 'react-native-reanimated';

const Color = {
  purple : "#dda0dd",
}

function CenterAuthHome({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>센터인증 메인화면 - 계좌등록 및 API 거래기능</Text>
      <View style = {styles.margin}>
       <Button
        color = {Color.purple}
        title = "계좌 등록"
        onPress={()=>
        navigation.navigate('centerAuth')} //<- 링크
        />
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "API 거래 기능"
          // onPress={()=>
          //   navigation.navigate('user')}
        />
      </View>
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
  text:{
    fontSize: 15,
    alignItems:'center',
    justifyContent:'center',
    marginBottom:10
  },
  margin:{
    marginBottom:10,
  },
  btn:{
    backgroundColor : "#dda0dd",
    borderRadius:20,
    width:100,
    height:50,
    alignItems:'center',
    justifyContent:'center',
  },
  btntext:{
    fontSize:15
  }
})

export default CenterAuthHome;