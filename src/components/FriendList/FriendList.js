import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList ({friends}) {
    return (
    
<ul className={s.friendList}>
     {friends.map(elem => (
         
      <li key={elem.id} className={s.item}>
  <span className={elem.isOnline ? s.statusIsOnline : s.status}></span>
  <img className={s.avatar} src={elem.avatar} alt="User avatar" width="48" />
  <p className={s.name}>{elem.name}</p>
</li>
        ))}
</ul> 
    )
};

FriendList.propTypes = {
    
//     stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//     percentage: PropTypes.number.isRequired,
//     }),
//   ),
   
 
  };