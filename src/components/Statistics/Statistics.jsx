import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(event => (
    <li
      key={event.id}
      style={{
        backgroundColor: getRandomColor(),
      }}
      className={css.stats_item}
    >
      <span className={css.label}>{event.label}</span>
      <span className={css.percentage}>{event.percentage}%</span>
    </li>
  ));
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>{elements}</ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
