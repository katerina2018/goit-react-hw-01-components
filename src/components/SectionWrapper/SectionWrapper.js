import PropTypes from 'prop-types';
import s from './SectionWrapper.module.css';

export default function SectionWrapper({ title, children }) {
  return (
    <section className={s.sectionWrapper}>
      {title && <h2 className={s.title}>{title}</h2>}
      {children}
    </section>
  );
}

SectionWrapper.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
