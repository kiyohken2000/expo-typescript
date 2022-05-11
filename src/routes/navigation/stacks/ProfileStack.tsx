import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import { RootStackParamList } from '../../../types/types'

import Profile from '../../../scenes/profile/Profile'

const Stack = createStackNavigator<RootStackParamList>()

export default function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: 'Profile',
          headerShown: true
        }}
      />
    </Stack.Navigator>
  )
}