import React, { useState, useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { RootStackParamList } from '../../../types/types'

import Post from "../../../scenes/post/Post";
import Print from "../../../scenes/print/Print";

const Stack = createStackNavigator<RootStackParamList>()

export default function ModalStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name='Post'
        component={Post}
        options={{
          title: 'Post',
          headerBackTitle: '戻る',
        }}
      />
      <Stack.Screen
        name='Print'
        component={Print}
      />
    </Stack.Navigator>
  )
}