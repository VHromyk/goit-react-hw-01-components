import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats, options }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.stat_list}>
      {stats.map(({ id, label, percentage }, index) => (
        <li
          key={id}
          className={styles.item}
          style={{ backgroundColor: options[index].color }}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.percantage}>{percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  stats: [],
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default Statistics;
