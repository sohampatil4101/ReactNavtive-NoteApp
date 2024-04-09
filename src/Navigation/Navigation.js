import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screen/Home'
import Register from '../screen/Register'
import Login from '../screen/Login'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Stack.Screen name='Register' component={Register} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
