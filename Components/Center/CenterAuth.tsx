//fragement_center_auth.xml

import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Color = {
  purple : "#dda0dd",
}

function CenterAuth({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style = {styles.centeralign}>
        <Text style={styles.text}>계좌등록 및 토큰 발급</Text>
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "신규 계좌등록 후 토큰발급"
          onPress={()=>
            navigation.navigate('centerAuthAuthorize')}
        />
      </View>
      <View style = {styles.margin}>
        <Button
          color = {Color.purple}
          title = "기존 계좌확인 후 토큰발급"
          onPress={()=>
            navigation.navigate('centerAuthAuthorize')}
        />  
      </View>
      <View style = {styles.margin}>
       <Button
        color = {Color.purple}
        title = "OOB 토큰발급(2-legged)"
          onPress={()=>
          navigation.navigate('centerAuthorTokenOob')}
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

export default CenterAuth;