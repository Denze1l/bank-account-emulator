import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.css';

const Balance = ({ balance, income, expenses }) => {
  return (
    <section className={Style.balance}>
      <span role="img" aria-label="Rise">
        ⬆️{income}$
      </span>
      <span role="img" aria-label="Fall">
        ⬇️{expenses}$
      </span>
      <span>Balance: {balance}$</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  income: PropTypes.number.isRequired,
  expenses: PropTypes.number.isRequired,
};
export default Balance;
