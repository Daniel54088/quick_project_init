import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router-3'
import style from "./main.css"

//component
import App from "./App"
import Home from './component/Home'
import Login from './component/Login'




ReactDOM.render(
    <Router history={browserHistory} >

        <Route path="/" component={App} >
            <IndexRoute component={Login}/>
            <Route path="home" component={Home} />
        </Route>

    </Router>
    , document.querySelector('#app')
)

