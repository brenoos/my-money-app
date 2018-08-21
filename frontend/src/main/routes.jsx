import React from 'react';
import { Router, Route, Redirect, hashHistory, IndexRoute } from 'react-router'

import App from './app'
import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRoute component={Dashboard} />
            <Route path='billingCycles' component={BillingCycle} />
        </Route>
        <Route from='*' to='/' />
    </Router>
)
export default Routes