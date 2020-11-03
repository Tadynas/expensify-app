export default (expenses) => {
  const reducer = (accumulator, item) => {
    return accumulator + item.amount;
  };

  return expenses.reduce(reducer, 0);
};