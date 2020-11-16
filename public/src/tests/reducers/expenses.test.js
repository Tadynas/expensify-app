import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('Should remove expense by ID', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ expenses[0], expenses[2] ]);
});

test('Should not remove expense if ID not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should add an expense', () => {
  const expenseToAdd = {
    description: 'Clothes',
    amount: 5500,
    createdAt: moment(0).add(5, 'days').valueOf()
  }
  
  const action = {
    type: 'ADD_EXPENSE',
    expense: expenseToAdd
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([ ...expenses, expenseToAdd ]);
}); 

test('Should edit an expense', () => {  
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[2].id,
    updates: {
      description: 'Strawberry'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe('Strawberry');
});

test('Should not edit if expense not found', () => {
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: {
      description: 'Strawberry'
    }
  }
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
  const expenseData = {
    id: '1',
    description: 'Kebab',
    note: '',
    amount: 9500,
    createdAt: 0
  }

  const action = {
    type: 'SET_EXPENSES',
    expenses: expenseData
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenseData);
});