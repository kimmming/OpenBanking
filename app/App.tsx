import React from 'react';
import { StyleSheet, Button, View, Text, Alert } from 'react-native'

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <View style = {styles.container}>
      <Button title='Button'
        onPress={() => Alert.alert("Clicked Button")}
      />
      <Separator />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonSize: {
    margin: 10
  },
  button:{
    alignItems :"center",
    backgroundColor:"purple",
    padding: 10
  }
});
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

