// Export a stateless functional component
// description, amount, createdAd

import React from 'react';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt}) => (
  <div>
    <h3>{description}</h3>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

const handleDeleteItem = () => {
  
}

export default connect()(ExpenseListItem);