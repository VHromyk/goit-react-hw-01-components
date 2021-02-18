import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.table}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }, index) => (
        <tr
          key={id}
          className={[index] % 2 ? styles.color_dark : styles.color_white}
        >
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  items: [],
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }),
  ),
};

export default TransactionHistory;
