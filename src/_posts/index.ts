import marked from 'marked';

import type { LoadedEntry } from '../types';

export const getEntriesMap = () => {
  const context = require.context(
    '!markdown-with-front-matter-loader!.',
    false,
    /.md$/,
  );

  return context.keys().reduce((memo, fileName) => {
    const obj = context(fileName);
    const entry = { ...obj, body: marked(obj.__content) } as LoadedEntry;
    const match = fileName.match(/.\/([^.]+).*/);

    if (match) {
      memo[match[1]] = entry;
    }

    return memo;
  }, {} as Record<string, LoadedEntry>);
};

export const getEntries = () => {
  const entries = getEntriesMap();
  return Object.values(entries).sort((a, b) =>
    a.timestamp < b.timestamp ? 1 : -1,
  );
};
