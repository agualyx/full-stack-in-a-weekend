import React from 'react'
import './UserList.css';
import UserItem from './UserItem';

const UserList = props => {
  const { items } = props;
  if (items.length === 0) {
      return (
          <div className='center'>
            <h2>No users found.</h2>
          </div>
      )
  } 
  return (
    <ul className='user-list'>
      {
        items.map(({id, name, places, image}) => (
          <UserItem
            key={id}
            id={id}
            name={name}
            places={places}
            image={image}
          />
        ))
      }
    </ul>
  )
}


export default UserList