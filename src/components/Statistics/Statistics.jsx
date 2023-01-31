import css from './Statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomColor } from '../../utils/getRandomColor';

export const Statistics = ({ title, stats }) => {
  const elements = stats.map(({id, label, percentage }) => (
    <li
      key={id}
      style={{
        backgroundColor: getRandomColor(),
      }}
      className={css.stats_item}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}%</span>
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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};
