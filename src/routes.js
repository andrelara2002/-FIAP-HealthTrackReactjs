import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './pages/Login/index'
import Resumo from './pages/Resumo/index'

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Login}/>
                <Route path='/resumo' component={Resumo}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;