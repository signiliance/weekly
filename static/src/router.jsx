import React, { Component } from 'react';
import { browserHistory,Router, Route} from 'react-router';
//import { Row, Col } from 'antd';
//import { connect } from 'dva';
import LoginPage from './components/sign-in-form';
import Admin from './apps/index';
import ListItem from './components/ListIten'
//const allportal = require('');


const requireAuth = () =>{


}

export default ({})=>{
    return (
        <Router history={browserHistory}>
            <Route path='/'  component={LoginPage} />
            <Route path= '/admin' component={Admin} />
            <Route path='/list' component={ListItem} />
        </Router>
    )
}

