import React, { FC } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Base from './views/Layout/Base';
import './App.scss';

import routes from './routes/route';

const App: FC = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback="Loading ...">
        <Base>
          <Switch>
            <Route exact path="/">
              <Redirect to="/app1/referral" />
            </Route>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Base>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
