export type Note = {
  id: number;
  site_id: number;
  path: string;
  title: string;
  body: string;
  headline: string;
  visibility: string;
  url: string;
};

export type RenderedNote = {
  note: Note;
  body: string;
};
