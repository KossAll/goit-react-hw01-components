import css from './FriendListItem.module.css';
import PropTypes from 'prop-types';
import clsx from 'clsx';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={clsx(css.status, {
        [css.online]: isOnline,
        [css.offline]: !isOnline,
      })}
    ></span>
    <img className={css.avatar} src={avatar} alt={name} width="56" height="56"/>
    <p className={css.name_friend}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
