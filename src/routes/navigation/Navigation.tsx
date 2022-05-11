import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './rootstack/RootStack'

export default function Main() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}