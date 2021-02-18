import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
  <ul className={styles.list}>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id} className={styles.item}>
        <span
          className={isOnline ? styles.status__online : styles.status__ofline}
        >
          {isOnline}
        </span>
        <img
          className={styles.avatar}
          src={avatar}
          alt={name}
          width="94"
          height="94"
        />
        <p className={styles.name}>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.defaultProps = {
  friends: [],
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
      id: PropTypes.number,
    }),
  ),
};

export default FriendList;
