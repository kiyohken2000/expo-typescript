import React, { useState, useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types/types";

import TabNavigator from "../tabs/Tabs";
import ModalStack from "../stacks/ModalStack";

const Stack = createStackNavigator<RootStackParamList>()

export default function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name='HomeRoot'
        component={TabNavigator}
      />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
          gestureEnabled: true,
          cardOverlayEnabled: true,
          ...TransitionPresets.ModalPresentationIOS,
        }}
      >
        <Stack.Screen
          name='ModalStack'
          component={ModalStack}
          options={{
            title: 'Post',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}