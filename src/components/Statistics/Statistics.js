import PropTypes from 'prop-types';
import s from './Statistics.module.css';
let i = 0;
const changeColor = () => {
  let arrayColor = ['#a83bf3', '#1d85ec', '#51c4f6', '#e54c68'];
  if (i < arrayColor.length - 1) {
    i++;
    return arrayColor[i];
  } else {
    i = 0;
    return arrayColor[i];
  }
};
export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: changeColor() }}
          >
            <span className={s.label}>{label}</span>
            <span className={s.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

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
