import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Header from './../components/Header';
import AddExpense from './../components/AddExpense';
import ExpenseDashboard from './../components/ExpenseDashboard';
import EditExpense from './../components/EditExpense';
import NotFound from './../components/NotFound';
import Help from './../components/Help';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboard} exact={true} />
                <Route path="/create" component={AddExpense} />
                <Route path="/edit/:id" component={EditExpense} />
                <Route path="/help" component={Help} />
                <Route component={NotFound} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;