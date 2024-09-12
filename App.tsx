

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/Home';
import Login from './screen/Login';
import DiscoverScreen from './screen/Discover';
let Stack=createNativeStackNavigator();
const App=()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
      
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="discover" component={DiscoverScreen} />


      </Stack.Navigator>
      
    </NavigationContainer>
    

  )

}


export default App;
