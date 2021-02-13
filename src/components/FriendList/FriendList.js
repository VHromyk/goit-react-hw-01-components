import React from "react";

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className="item">
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
    ))}
  </ul>
);

export default FriendList;
