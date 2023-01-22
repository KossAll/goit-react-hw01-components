import css from './Profile.module.css';
import PropTypes from 'prop-types';
import { FaAt } from 'react-icons/fa';


export const UserProfile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>
          <FaAt className={css.icon} />
          {tag}
        </p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.list_item}>
          <span className={css.lable}>Followers</span>
          <span className={css.quantity}>{stats.followers}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.lable}>Views</span>
          <span className={css.quantity}>{stats.views}</span>
        </li>
        <li className={css.list_item}>
          <span className={css.lable}>Likes</span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

UserProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
