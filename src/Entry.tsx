/** @jsxRuntime classic */
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/react';
import { EuiPageTemplate } from '@elastic/eui';

import { LoadedEntry } from './types';
import { Header } from './Header';
import { SideNav } from './SideNav';

import 'github-markdown-css';

export const Entry = ({ entry }: { entry: LoadedEntry }) => {
  const { title, body } = entry;

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
      <Header />
      <EuiPageTemplate
        className="main"
        pageSideBar={<SideNav />}
        pageHeader={{
          pageTitle: title,
        }}>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: body }}
        />
      </EuiPageTemplate>
    </div>
  );
};
