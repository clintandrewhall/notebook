import { Route } from 'react-router-dom';

import { Entry } from './Entry';
import { getEntriesMap } from './_posts';

export const routes = () => {
  const entries = getEntriesMap();

  return [...Object.keys(entries)].map((path) => {
    const entry = entries[path];
    return (
      <Route
        key={path}
        path={'/' + entry?.slug}
        component={() => <Entry entry={entry} />}
      />
    );
  });
};
