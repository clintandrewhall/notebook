/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, css } from '@emotion/react';

import { LoadedEntry } from './types';

import 'github-markdown-css';

export const Entry = ({ entry }: { entry: LoadedEntry }) => {
  const { body } = entry;

  return (
    <div>
      <Global
        styles={css`
          img[alt='notebook-image'] {
            width: 200px;
            margin: 4px 24px 4px 0;
          }
          .markdown-body h1 {
            display: none;
          }
        `}
      />
      <div
        className="markdown-body"
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </div>
  );
};
