import React,{Component, ReactElement} from 'react';

import 'react-native-gesture-handler';
import { StyleSheet,View,Text,Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Style {
  container:any,
  text:any,
  centerbtn:any,
}

function HomeScreen({navigation}: {navigation: any}) {
  //const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View >
      <Text style = {styles.text}>선택 화면 - 센터인증 또는 자체 인증</Text>
      </View>
      
      <View style={styles.centerbtn}>
        <Button  
          
          color="yellow"
          title = "센터 인증"

          onPress={()=>
            navigation.navigate('center')}
            //CenterAuthHome으로
          
        />
      </View>
      <Button
        title = "자체인증"
        onPress={()=>
          navigation.navigate('self')}
          //SelfAuthHome으로
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  text:{
    fontSize: 30
  },
  centerbtn:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export default HomeScreen;