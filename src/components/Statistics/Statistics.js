import PropTypes from 'prop-types';
import s from './Statistics.module.css';

  export default function Statistics ({title,stats}) {
    return (
    <section className={s.statistics}>
  <h2 className={s.title}>{title}</h2>
<ul className={s.statList}>
     {stats.map(elem => (
          <li
            key={elem.id}
           className={s.item}
            ><span className={s.label}>{elem.label}</span>
      <span className={s.percentage}>{elem.percentage}%</span></li>
        ))}
</ul>
  

  
</section>);
};

Statistics.propTypes = {
    title: PropTypes.string.isRequired,
    stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    }),
  ),
   
 
  };