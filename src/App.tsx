import { HashRouter as Router, Route } from 'react-router-dom';

import { Home } from './Home';
import { routes } from './routes';

export const App = () => (
  <Router>
    <Route path="/" component={Home} exact />
    {routes()}
  </Router>
);
