import React, { useContext, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { UserDataContext } from '../../contexts/UserDataContext';

import RootStack from './rootstack/RootStack'

export default function Main() {
  const { setUserData } = useContext(UserDataContext)

  useEffect(() => {
    const user = {
      id: 12345,
      userName: 'React Native Expo'
    }
    setUserData(user)
  }, [])

  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}