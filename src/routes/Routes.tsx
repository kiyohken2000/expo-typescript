import React, { useEffect } from 'react'
import { View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { authenticate } from '../slices/app.slice'
import Main from './navigation'

export default function Routes() {
  const { checked, loggedIn } = useSelector((state) => state.app)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authenticate({ loggedIn: true, checked: true }))
  }, [])

  console.log('[##] loggedIn', loggedIn)

  // rendering
  if (!checked) {
    return (
      <View />
    )
  }

  return (
    <Main />
  )
}