import React from 'react';
import {HashRouter as Router,Route,Redirect,Switch} from 'react-router-dom';
import Home from '../Route/Home';
import Apply from '../Route/Apply';
import Board from '../Route/Board/index';
import Contact from '../Route/Contact';
import Introduce from '../Route/Introduce';
import Notice from '../Route/Notice/index';
import NoticeCreate from '../Route/Notice/NoticeCreate';
import NoticeShow from '../Route/Notice/NoticeShow';
import NoticeEdit from '../Route/Notice/NoticeEdit';
import Post from '../Route/Post';
import Task from '../Route/Task';
import Header from './Header';
import BoardCreate from '../Route/Board/BoardCreate';
import BoardShow from '../Route/Board/BoardShow';
import BoardEdit from '../Route/Board/BoardEdit';

export default () => (
    <Router>
        <>
        <Header />
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/applies" exact component={Apply} />
            <Route path="/boards" exact component={Board} />
            <Route path="/boards/create" exact component={BoardCreate} />
            <Route path="/boards/:id" exact component={BoardShow} />
            <Route path="/boards/:id/edit" exact component={BoardEdit} />
            <Route path="/contacts" exact component={Contact} />
            <Route path="/introduces" exact component={Introduce} />
            <Route path="/notices" exact component={Notice} />
            <Route path="/notices/create" exact component={NoticeCreate} />
            <Route path="/notices/:id" exact component={NoticeShow} />
            <Route path="/notices/:id/edit" exact component={NoticeEdit} />
            <Route path="/posts" exact component={Post} />
            <Route path="/tasks" exact component={Task} />
            <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
)
