import React, { useState, useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import { RootStackParamList } from '../../../types/types'
import { HomeTitleContext } from '../../../contexts/HomeTitleContext'

import HeaderRightButton from '../../../components/HeaderRightButton'

import Profile from '../../../scenes/profile/Profile'
import Favorite from '../../../scenes/favorite/Favorite'

const Stack = createStackNavigator<RootStackParamList>()

export default function ProfileStack() {
  const [title, setTitle] = useState('default title')

  return (
    <HomeTitleContext.Provider
      value={{
        title,
        setTitle,
      }}
    >
      <HomeTitleContext.Consumer>
        {(ctx) => (
          <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={navigationProps}
          >
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'Profile',
                headerShown: true,
                headerRight: () => <HeaderRightButton from='Profile' />
              }}
            />
            <Stack.Screen
              name="Favorite"
              component={Favorite}
              options={{
                title: ctx.title,
                headerShown: true,
                headerRight: () => <HeaderRightButton from='Favorite' />
              }}
            />
          </Stack.Navigator>
      )}
      </HomeTitleContext.Consumer>
    </HomeTitleContext.Provider>
  )
}