import React from 'react';
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Dashboard from '../dashboard/dashboard'
import BillingCycle from '../billingCycle/billingCycle'

const Routes = props => (
    <Router history={hashHistory}>
        <Route path='/' component={Dashboard} />
        <Route path='billingCycles' component={BillingCycle} />
        <Route from='*' to='/' />
    </Router>
)
export default Routes