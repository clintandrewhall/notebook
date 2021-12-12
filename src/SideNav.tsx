import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { EuiSideNav, htmlIdGenerator } from '@elastic/eui';

import { getEntries } from './_posts';

const id = htmlIdGenerator('nav');

export const SideNav = () => {
  const history = useHistory();

  const items = getEntries().map((entry) => ({
    name: entry.title,
    id: htmlIdGenerator()(),
    onClick: useCallback(() => history.push('/' + entry.slug), [history]),
  }));

  const sideNav = [
    {
      name: 'Home',
      id: id(),
      href: '/notebook',
    },
    {
      name: 'Entries',
      id: id(),
      items,
    },
  ];

  return (
    <EuiSideNav
      aria-label="Navigation"
      mobileTitle="Navigation"
      style={{ width: 192 }}
      items={sideNav}
    />
  );
};
