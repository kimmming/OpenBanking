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
import CenterAuthorizeCase1 from './Components/Center/CenterAuthorizeCase1';
import CenterAuthorizeCase3 from './Components/Center/CenterAuthorizeCase3';
import CenterAuthTokenRequestOob from './Components/Center/CenterAuthTokenRequestOob';

const Stack = createNativeStackNavigator();

function App() { 
 
    return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='center' component={CenterAuthHome}/>
        <Stack.Screen name='self' component={SelfAuthHome}/>
        <Stack.Screen name='centerAuth' component={CenterAuth}/>
        <Stack.Screen name='centerAuthAuthorize' component={CenerAuthAuthorize}/>
        <Stack.Screen name='centerAuthorcase1' component={CenterAuthorizeCase1}/>
        <Stack.Screen name='centerAuthorcase3' component={CenterAuthorizeCase3}/>
        <Stack.Screen name='centerAuthorTokenOob' component={CenterAuthTokenRequestOob}/>

        
      </Stack.Navigator>
    </NavigationContainer>
    )
  }


const styles = StyleSheet.create({

});


export default App;