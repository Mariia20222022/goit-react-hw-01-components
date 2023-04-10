import PropTypes, { bool, string } from 'prop-types';
import FriendListItem from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export default function FriendList({ friends }) {
  return (
    <ul className={css.friend__list}>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendListItem
          key={id}
          isOnline={isOnline}
          avatar={avatar}
          name={name}
        />
      ))}
    </ul>
  );
}
FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      isOnline: bool,
      avatar: string,
      name: string,
    }).isRequired
  ),
};
