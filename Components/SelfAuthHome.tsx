import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Color = {
  purple : "#dda0dd",
}

function  SelfAuthHome({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.centeralign}>
        <Text style={styles.text}>자체인증 메인화면 - 계좌등록 및 API 거래기능</Text>
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "계좌등록"
            // onPress={()=>
            //   navigation.navigate('user')}
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
  centeralign:{
    alignItems:'center', // 가로 가운데 정렬
    justifyContent:'center', // 세로 가운데 정렬
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

export default SelfAuthHome;