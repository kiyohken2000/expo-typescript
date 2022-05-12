import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { screenOptions } from './navigationProps/navigationProps'

import ReadStack from '../stacks/toptabStack/ReadStack'
import WriteStack from '../stacks/toptabStack/WriteStack'

const Tab = createMaterialTopTabNavigator()

export default function ReadWriteTopTabs() {
  return (
    <Tab.Navigator
      initialRouteName="WriteTab"
      screenOptions={screenOptions}
    >
      <Tab.Screen
        name="ReadTab"
        component={ReadStack}
        options={{ tabBarLabel: 'Read' }}
      />
      <Tab.Screen
        name="WriteTab"
        component={WriteStack}
        options={{ tabBarLabel: 'Write' }}
      />
    </Tab.Navigator>
  )
}