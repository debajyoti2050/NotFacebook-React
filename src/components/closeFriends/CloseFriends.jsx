import './closefriends.css'

import React from 'react'

export default function CloseFriends({friends}) {
  return (
                <li className="sidebarFriend">
                    <img src={friends.profilePicture} alt="" className="sidebarFriendImg" />
                    <span className="sidebarFriendName">{friends.username}</span>

                </li>
  )
}
