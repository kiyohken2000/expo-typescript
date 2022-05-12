import React, { useState, useContext, useEffect } from "react";
import { createStackNavigator } from '@react-navigation/stack'
import { TransitionPresets } from "@react-navigation/stack";
import { RootStackParamList } from "../../../types/types";
import * as Notifications from 'expo-notifications'
import * as Device from 'expo-device'
import { UserDataContext } from "../../../contexts/UserDataContext";

import TabNavigator from "../tabs/Tabs";
import ModalStack from "../stacks/ModalStack";

const Stack = createStackNavigator<RootStackParamList>()

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function RootStack() {
  const { userData } = useContext(UserDataContext)

  useEffect(() => {
    (async () => {
      const isDevice = Device.isDevice
      if(!isDevice) return
      console.log('get push token')
      const { status: existingStatus } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus;
      if (existingStatus !== "granted") {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
      }
      if (finalStatus !== "granted") {
        return;
      }
      const {data } = await Notifications.getExpoPushTokenAsync();
      console.log(userData)
      console.log(data)
    })();
  }, [userData])

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