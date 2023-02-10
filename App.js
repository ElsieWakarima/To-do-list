import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodo from './src/screens/AddTodo';
import DisplayTodo from './src/screens/DisplayTodo';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();

// import { View, Text } from 'react-native'
import React from 'react'
import CompletedTasks from './src/screens/CompletedTasks';
import UncompletedTasks from './src/screens/UncompletedTasks';

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='HomeScreen'>
      <Stack.Screen options={{headerShown: false}} name="AddTodo" component={AddTodo} />
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="DisplayTodo" component={DisplayTodo} />
      <Stack.Screen options={{headerShown: false}} name="CompletedTasks" component={CompletedTasks} />
      <Stack.Screen options={{headerShown: false}} name="UncompletedTasks" component={UncompletedTasks} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App