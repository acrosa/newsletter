import { Note } from "./note";

export type Site = {
  id: number;
  name: string;
  headline: string;
  about: string;
  host: string;
  site_path: string;
  published: boolean;
  domain: string;
  notes: [Note];
};
