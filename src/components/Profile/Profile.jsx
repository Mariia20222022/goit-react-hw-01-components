

import PropTypes from 'prop-types';
import css from "./Profile.module.css";
export default function Profile(props) {
  const {avatar,username,tag,location,stats:{followers,views,likes} } = props;
    return (
         <div  className={css.profile}>
        <div  className={css.description}>
    <img
      src={avatar}
            alt={username}
             width={100}
          height={100}
      className={css.avatar}
    />
    <p className={css.name}>{username}</p>
    <p className={css.tag}>{tag}</p>
          <p className={css.location}>{location}</p>
  </div>

        <ul className={css.stats}>
    <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers }</span>
    </li>
    <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{ views}</span>
    </li>
    <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{ likes}</span>
    </li>
  </ul>
</div>
    )
}
Profile.prototype = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        stats: PropTypes.shape({
                views: PropTypes.number,
                likes: PropTypes.number,
                followers:PropTypes.number,
        }).isRequired

}