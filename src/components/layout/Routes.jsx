import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard'
import New_ideas from '../../pages/New ideas'
import Manage_accounts from '../../pages/Manage accounts'

const Routess = () => {
    return (
        <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/New_ideas' component={New_ideas} />
            <Route path='/Manage_accounts' component={Manage_accounts} />
        </Switch>
    )
}

export default Routess