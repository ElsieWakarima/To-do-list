import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './src/screens/AddTodo';
import DisplayTodo from './src/screens/DisplayTodo';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

import React from 'react'


const App = () => {
  return (
      // diclare and state all the available screen for routing 
  <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen options={{headerShown: false}} name="AddTodo" component={AddTodo} />
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="DisplayTodo" component={DisplayTodo} />
  
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App