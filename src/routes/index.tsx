import * as React from 'react';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'


import store  , { history } from '../store/index';
import Home from '../Home/Home';
import About from '../About/About';


class AppRoot extends React.Component {
    public render(){
        return (
            <Provider store={store}>
                { /* ConnectedRouter will use the store from Provider automatically */ }
                <ConnectedRouter history={history}>
                    <div>
                        <Route exact path="/" component={Home}/>
                        <Route path="/about" component={About}/>
                    </div>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default AppRoot;