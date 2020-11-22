import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

export default class ExpenseForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      focused: false,
      error: ''      
    };
  }

  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    focused: false,
    error: ''
  };

  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/(^(?!0[0-9]))(^\d*)(\.\d{0,2})?$/) && amount != "00") {
      if(amount == ".") {
        this.setState(() => ({ amount: '0.' }));
      } else {
        this.setState(() => ({ amount }));
      }
    }
  };

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ focused }));
  }

  onSubmit = (e) => {
    e.preventDefault();

    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        { this.state.error && <p className="form__error">{ this.state.error }</p> }
        <input 
        type="text"
        placeholder="Description"
        autoFocus
        className="form-item"
        value={this.state.description}
        onChange={this.onDescriptionChange}
        />
        <input 
        type="text"
        placeholder="Amount"
        className="form-item"
        value={this.state.amount}
        onChange={this.onAmountChange}
        />
        <SingleDatePicker 
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.focused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea 
        placeholder="Add a note for your expense (optional"
        className="form-item form-item--textarea"
        value={this.state.note}
        onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">{this.props.expense ? "Edit Expense" : "Add Expense" }</button>
        </div>
      </form>
    )
  }
}