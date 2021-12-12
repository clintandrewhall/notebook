import { EuiPageTemplate } from '@elastic/eui';

import { Header } from './Header';
import { SideNav } from './SideNav';

import 'github-markdown-css';

export const Home = () => {
  const content = (
    <div className="markdown-body">
      <p>
        This is a proof-of-concept for a Github and Markdown-driven notes
        platform, utilizing Github Pages (and Actions) to deploy ideas.
      </p>
      <p>It's a proof-of-concept, I could change my mind. 🧐</p>
    </div>
  );

  return (
    <div>
      <Header />
      <EuiPageTemplate
        className="main"
        pageSideBar={<SideNav />}
        pageHeader={{
          pageTitle: 'Hello there!',
        }}>
        {content}
      </EuiPageTemplate>
    </div>
  );
};
