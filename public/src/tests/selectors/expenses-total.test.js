import expensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('Should return 0 of no expenses', () => {
  const result = expensesTotal([]);
  expect(result).toBe(0);
});

test('Should correctly add up a single expense', () => {
  const result = expensesTotal([ expenses[0] ]);
  expect(result).toBe(expenses[0].amount);
});

test('Should correctly add up a multiple expenses expense', () => {
  const result = expensesTotal(expenses);
  expect(result).toBe(expenses[0].amount + expenses[1].amount + expenses[2].amount);
});