import React from 'react';
import ConnectedExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseDashboard = () => (
    <div>
        <ExpenseListFilters />
        <ConnectedExpenseList />
    </div>
);

export default ExpenseDashboard;