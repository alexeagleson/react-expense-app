import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export class ExpenseForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: false,
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState({ description });
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState({ note });
    };

    onDateChange = (createdAt) => {
        if (createdAt) this.setState(() => ({ createdAt }));
    };

    onCalendarFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d+(\.\d{0,2})?$/)) this.setState(() => ({ amount }));
    };

    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'description and amount are required' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note,
            });
        }
    };

    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.onSubmit}>
                    <input value={this.state.description} onChange={this.onDescriptionChange} type="text" placeholder="description" autoFocus />
                    <input value={this.state.amount} onChange={this.onAmountChange} type="text" placeholder="amount" autoFocus />
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onCalendarFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)" />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}

export default ExpenseForm;