import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers  } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import * as reducers from './components/reducer';
import Disciplina from './components/Disciplina';

export const store = createStore(
    combineReducers({
        ...reducers,
        routing: routerReducer
    }),
    composeWithDevTools()
);
const history = syncHistoryWithStore(browserHistory, store);
console.log(store.getState());


render(
    <Provider store={store}>
        <Router history={history}>
            <Route exact path="/" component={Disciplina} >
                <IndexRoute component={Disciplina} />
                <Route path="about" component={Disciplina} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('app')
);
