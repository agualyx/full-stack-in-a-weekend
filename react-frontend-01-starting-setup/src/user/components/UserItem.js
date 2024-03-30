import React from 'react'
import './UserItem.css'

const UserItem = props => {
  const { name, places, image } = props;
  return (
    <li className='user-item'>
        <div className='user-item_content'>
          <div className='user-item_image'>
            <img src={image} alt="img lost"/>
          </div>
          <div className='user-item_info'>
            <h2>{name}</h2>
            <h3>{places}</h3>
          </div>
          
        </div>
    </li>
  )
}


export default UserItem