import { HashRouter as Router, Route } from 'react-router-dom';
import { EuiThemeProvider } from '@elastic/eui';

import { Home } from './Home';
import { routes } from './routes';

import '@elastic/eui/dist/eui_theme_amsterdam_light.css';

export const App = () => (
  <EuiThemeProvider>
    <Router>
      <Route path="/" component={Home} exact />
      {routes()}
    </Router>
  </EuiThemeProvider>
);
