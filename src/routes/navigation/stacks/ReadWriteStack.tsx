import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import { RootStackParamList } from '../../../types/types'

import ReadWriteTopTabs from '../toptabs/ReadWriteTopTabs'

const Stack = createStackNavigator<RootStackParamList>()

export default function ReadWriteStack() {
  return (
    <Stack.Navigator
      initialRouteName="ReadWrite"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="ReadWrite"
        component={ReadWriteTopTabs}
        options={{
          title: 'Read/Write',
        }}
      />
    </Stack.Navigator>
  )
}