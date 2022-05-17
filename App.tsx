import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet,View,Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { useNavigation } from '@react-navigation/native';

import HomeScreen from './Components/Home';
import CenterAuthHome from './Components/Center/CenterAuthHome';
import SelfAuthHome from './Components/SelfAuthHome';
import CenerAuthAuthorize from './Components/Center/CenterAuthAuthorize';
import CenterAuth from './Components/Center/CenterAuth';
import CenterAuthAccount from './Components/Center/CenterAuthorAccount';

const Stack = createNativeStackNavigator();

function App() { 
 
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='center' component={CenterAuthHome}/>
        <Stack.Screen name='self' component={SelfAuthHome}/>
        <Stack.Screen name='centerAuth' component={CenterAuth}/>
        <Stack.Screen name='centerAuthorize' component={CenerAuthAuthorize}/>
        <Stack.Screen name='centerAuthAccount' component={CenterAuthAccount}/>

        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }


const styles = StyleSheet.create({

});


export default App;