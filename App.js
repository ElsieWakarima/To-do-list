import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AddTodo from './screen/AddTodo';
import DisplayTodo from './screen/DisplayTodo';
import WelcomeScreen from './screen/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
