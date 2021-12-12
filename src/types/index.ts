import { tags } from '../tags';

export type TagName = keyof typeof tags;

export interface Tag {
  name: TagName;
  icon: string;
}

export interface Entry {
  title: string;
  caption: string;
  slug: string;
  tags: TagName[];
  timestamp: number;
}

export interface LoadedEntry extends Entry {
  body: string;
}
