import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './stacks/HomeStack'
import TabNavigator from './tabs/Tabs'

export default () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}
