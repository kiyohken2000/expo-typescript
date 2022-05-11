import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../../theme'

// stack navigators
import HomeStack from '../stacks/HomeStack'
import ProfileStack from '../stacks/ProfileStack'

const Tab = createBottomTabNavigator()

const TabNavigator = () => {
  return (
    <Tab.Navigator
      options={{
        tabBarActiveTintColor: colors.lightPurple,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        }
      }}
      defaultScreenOptions={{
        headerShown:false,
        headerTransparent:true
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      initialRouteName="HomeTab"
      swipeEnabled={false}
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
    </Tab.Navigator>
  )
}

export default TabNavigator
