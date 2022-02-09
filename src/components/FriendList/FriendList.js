import PropTypes from 'prop-types';
import s from './FriendList.module.css';
import FriendListItem from './FriendListItem';

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map(friend => (
        <FriendListItem {...friend} key={friend.id} />
      ))}
    </ul>
  );
}
