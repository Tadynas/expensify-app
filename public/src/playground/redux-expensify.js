import { createStore, combineReducers } from 'redux';

const demoState = {
  expenses: [{
    id: 'abcd',
    description: 'Home Rent',
    note: 'This was rent for August',
    amount: 31664,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};