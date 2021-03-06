import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './components/login';
import Dashboard from './components/dashboard';
import NewClient from './components/new_client';
import ClientsPanel from './components/clients_panel';
import ClientProfile from './components/client_profile';
import reducers from './reducers';
import promise from 'redux-promise';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:gymName/dashboard/clients/new" component={NewClient} />
          <Route path="/:gymName/dashboard/clients/:id" component={ClientProfile} />
          <Route path="/:gymName/dashboard/clients/" component={ClientsPanel} />
          <Route path="/:gymName/dashboard" component={Dashboard} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
