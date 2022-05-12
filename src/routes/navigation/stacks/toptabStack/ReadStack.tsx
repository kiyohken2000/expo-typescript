import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../types/types'

import Read from '../../../../scenes/read/Read'
import History from '../../../../scenes/history/History'

const Stack = createStackNavigator<RootStackParamList>()

export default function ReadStack() {
  return (
    <Stack.Navigator
      initialRouteName="Read"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Read"
        component={Read}
      />
      <Stack.Screen
        name="History"
        component={History}
      />
    </Stack.Navigator>
  )
}