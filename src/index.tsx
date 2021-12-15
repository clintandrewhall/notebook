import { StrictMode } from 'react';
import { render } from 'react-dom';

import { Global, css } from '@emotion/react';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';

const customStyles = css({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
});

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
);

import { App } from './App';
const rootElement = document.getElementById('root');
// if (rootElement?.hasChildNodes()) {
//   hydrate(
//     <StrictMode>
//       <App />
//     </StrictMode>,
//     rootElement,
//   );
render(
  <StrictMode>
    <GlobalStyles />
    <App />
  </StrictMode>,
  rootElement,
);
//}
