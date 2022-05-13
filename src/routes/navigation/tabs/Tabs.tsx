import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { RootTabParamList } from '../../../types/types'
import { colors } from '../../../theme'

// stack navigators
import HomeStack from '../stacks/HomeStack'
import ProfileStack from '../stacks/ProfileStack'
import ReadWriteStack from '../stacks/ReadWriteStack'

const Tab = createBottomTabNavigator<RootTabParamList>()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      defaultScreenOptions={{
        headerShown:false,
        headerTransparent:true,
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: colors.lightPurple,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        }
      })}
      initialRouteName="HomeTab"
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileTab"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="user"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ReadWriteTab"
        component={ReadWriteStack}
        options={{
          tabBarLabel: 'R/W',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="address-card"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default TabNavigator
