import React from 'react'
import UserList from '../components/UserList'

export const User = () => {
  const USERS = [{
    id: 'u1',
    name: 'agualyx',
    image: 'https://i02piccdn.sogoucdn.com/5e10665b111a3275',
    places:3
  }]
  return (
    <UserList items={[]}/>
  )
}
