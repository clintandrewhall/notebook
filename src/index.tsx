import { StrictMode } from 'react';
import { hydrate, render } from 'react-dom';

import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement?.hasChildNodes()) {
  hydrate(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement,
  );
} else {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    rootElement,
  );
}
