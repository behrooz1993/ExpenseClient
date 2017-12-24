import React,{Component} from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import Index from './Index';
import Login from './Login';
import Register from './Register';

export default class AppRouter extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Index}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}