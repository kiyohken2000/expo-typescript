import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Main from './navigation'
import Initial from '../scenes/initial/Initial'

export default function Routes() {
  const { checked, loggedIn } = useSelector((state: any) => state.app)

  console.log('[##] loggedIn', loggedIn)

  // rendering
  if (!checked) {
    return (
      <Initial />
    )
  }

  return (
    <Main />
  )
}