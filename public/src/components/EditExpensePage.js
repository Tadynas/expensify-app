import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      This is edit expense with id of {props.match.params.id}
    </div>
  );
}

export default EditExpensePage;