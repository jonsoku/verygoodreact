import React from 'react';
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from '../Route/Home';
import Apply from '../Route/Apply';
import Board from '../Route/Board';
import Contact from '../Route/Contact';
import Introduce from '../Route/Introduce';
import Notice from '../Route/Notice';
import Post from '../Route/Post';
import Task from '../Route/Task';
import Header from './Header';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/applies" exact component={Apply} />
            <Route path="/boards" exact component={Board} />
            <Route path="/contacts" exact component={Contact} />
            <Route path="/introduces" exact component={Introduce} />
            <Route path="/notices" exact component={Notice} />
            <Route path="/posts" exact component={Post} />
            <Route path="/tasks" exact component={Task} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)
