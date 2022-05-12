import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../../../types/types'

import Write from '../../../../scenes/write/Write'
import History from '../../../../scenes/history/History'

const Stack = createStackNavigator<RootStackParamList>()

export default function WriteStack() {
  return (
    <Stack.Navigator
      initialRouteName="Write"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Write"
        component={Write}
      />
      <Stack.Screen
        name="History"
        component={History}
      />
    </Stack.Navigator>
  )
}