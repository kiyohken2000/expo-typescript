import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { UserDataContext } from '../../contexts/UserDataContext';

import RootStack from './rootstack/RootStack'

export default function Main() {
  const { userData } = useContext(UserDataContext)

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}