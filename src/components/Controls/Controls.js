import React from 'react';
import PropTypes from 'prop-types';
import Style from './style.module.css';

const Controls = ({ value, onDeposit, onWithdraw, handleChange }) => {
  return (
    <section className={Style.controls}>
      <input
        onChange={handleChange}
        placeholder="write down your summ"
        type="number"
        name="amount"
        value={value === 0 ? '' : value}
      />
      <button onClick={onDeposit} type="button">
        Deposit
      </button>
      <button onClick={onWithdraw} type="button">
        Withdraw
      </button>
    </section>
  );
};

Controls.propTypes = {
  value: PropTypes.number.isRequired,
  onDeposit: PropTypes.func.isRequired,
  onWithdraw: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Controls;
