import React from 'react'
import { render } from 'react-dom'
//import { hashHistory, Router, Route} from 'react-router'
//import LoginPage from './components/sign-in-form';
//import { browserHistory, Router, Route, IndexRoute } from 'react-router'
//import router from './router';
import Router from './router';

render(<Router />,
    document.getElementById('root'));

//console.log(Router1);