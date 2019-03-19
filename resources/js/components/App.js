import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import GlobalStyles from './GlobalStyles';


export default class App extends Component {
    render() {
        return (
            <>
                <div>
                    <GlobalStyles />
                    <Router/>
                </div>
            </>
        );
    }
}

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}
