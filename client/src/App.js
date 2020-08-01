import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import { Home } from './containers';
import { NotFoundView } from './views';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="*" component={NotFoundView} />
    </Switch>
  </BrowserRouter>
);

export default App;
