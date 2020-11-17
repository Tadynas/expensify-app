import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
  const expensesData = {};
  expenses.forEach(({ id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  });
  database.ref('expenses').set(expensesData).then(() => done());
});

test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('Should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'New note value' } );
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: {
      note: 'New note value'
    }
  });
});

test('Should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('Should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expense = {
    description: 'Headphones',
    amount: '30000',
    note: 'This one is good',
    createdAt: 1000
  };
  store.dispatch(startAddExpense(expense)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expense
      }
    });

    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expense);
    done();
  });
});

test('Should add expense with defaults to database and store', () => {
  const store = createMockStore({});
  const expenseData = {
    description: '',
    amount: 0,
    note: '',
    createdAt: 0
  };
  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    return database.ref(`expenses/${actions[0].expense.id}`).once('value');
  }).then(() => { (snapshot) => {
    expect(snapshot.val()).toEqual(expenseData);
    done();
  }});
});

test('Should setup set expense object with data', () => {
  const action  = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

test('Should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    });
    done();
  });
});

test('Should remove expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startRemoveExpense(expenses[0]))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: expenses[0].id
    });
    return database.ref(`expense/${expenses[0].id}`).once('value');
  })    
  .then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  });
});

test('Should edit expenses from firebase', (done) => {
  const store = createMockStore({});

  const updates = {
    description: 'Apple',
    note: 'red',
    amount: 999,
    createdAt: 5000
  }

  store.dispatch(startEditExpense(expenses[2].id, updates))
  .then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'EDIT_EXPENSE',
      id: expenses[2].id,
      updates
    });
    return database.ref(`expenses/${expenses[2].id}`).once('value');
  })
  .then((snapshot) => {
    expect(snapshot.val()).toEqual(updates);
    done();
  });
});