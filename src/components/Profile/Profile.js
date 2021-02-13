import React from "react";

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="Аватар пользователя" class="avatar" width="100" />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <ul class="stats">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;
