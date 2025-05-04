import styles from './profile.module.css';
function Profile({ username, tag, location, image, stats }) {
  return (
    <div className={styles.profile}>
  <div className={styles.description}>
  <img src={image} alt="User avatar" className={styles.avatar} />
    <p className={styles.username}>{username}</p>
    <p className={styles.tag}>@{tag}</p>
    <p className={styles.location}>{location}</p>
  </div>
  <ul className={styles.stats}>
    <li className={styles.statsBorder}>
      <span >Followers </span>
      <span>{stats.followers}</span>
    </li>
    <li className={styles.statsBorder}>
      <span >Views </span>
      <span>{stats.views}</span>
    </li>
    <li >
      <span>Likes </span>
      <span>{stats.likes}</span>
    </li>
  </ul>
</div>
  );
}
export default Profile;