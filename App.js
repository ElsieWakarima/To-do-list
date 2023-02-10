import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './screen/AddTodo';
import DisplayTodo from './screen/DisplayTodo';
import WelcomeScreen from './screen/WelcomeScreen';

const Stack = createNativeStackNavigator();

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { TailwindProvider } from 'tailwindcss-react-native';
// import Homepagescreen from './components/screens/Homepagescreen';

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   // const Drawer = createDrawerNavigator();

//   return (
//     <NavigationContainer >
//         <TailwindProvider>

//     <Stack.Navigator  initialRouteName="Homepagescreen">
//     <Stack.Screen options={{headerShown: false}}name="Homepagescreen" component={Homepagescreen} />
  
      



//     </Stack.Navigator>
   
//     </TailwindProvider>
//   </NavigationContainer>
    
  
//   );
// }

import { View, Text } from 'react-native'
import React from 'react'

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='WelcomeScreen'>
      <Stack.Screen options={{headerShown: false}} name="AddTodo" component={AddTodo} />
      <Stack.Screen options={{headerShown: false}} name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen options={{headerShown: false}} name="DisplayTodo" component={DisplayTodo} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App