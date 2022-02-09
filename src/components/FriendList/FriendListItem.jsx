import s from './FriendList.module.css';

export default function FriendListItem({ isOnline, name, avatar }) {
  return (
    <li className={s.item}>
      <span className={isOnline ? s.statusIsOnline : s.status}></span>
      <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
