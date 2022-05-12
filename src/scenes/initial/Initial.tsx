import React, { useEffect, useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import { authenticate } from '../../slices/app.slice'
import ScreenTemplate from '../../components/ScreenTemplate'
import { UserDataContext } from '../../contexts/UserDataContext'

export default function Initial() {
  const dispatch = useDispatch()
  const { setUserData } = useContext(UserDataContext)

  useEffect(() => {
    const user = {
      id: 12345,
      userName: 'React Native Expo'
    }
    setUserData(user)
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  return (
    <ScreenTemplate>
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    </ScreenTemplate>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  label: {

  }
})