import { Note, RenderedNote } from "./note";
import { Site } from "./site";

const baseUrl: string = "https://collectednotes.com";
const sitePath = process.env.SITE_PATH as string;

export function headers(): HeadersInit | undefined {
  return {
    Accept: "application/json",
    "Content-Type": "application/json",
  };
}

export async function getSite({
  path,
}: {
  path: string;
}): Promise<Site | undefined> {
  let response = await fetch(`${baseUrl}/${path}`, {
    headers: headers(),
  });

  if (response.status === 200) {
    return response.json();
  }
}

export async function getNotes({
  site_path,
}: {
  site_path: string;
}): Promise<[Note] | undefined> {
  let response = await fetch(`${baseUrl}/sites/${site_path}/notes`, {
    headers: headers(),
  });

  if (response.status === 200) {
    return response.json();
  }
}

export async function getRenderedNote({
  site_path,
  path,
}: {
  site_path: string;
  path: string;
}): Promise<RenderedNote | undefined> {
  let response = await fetch(`${baseUrl}/${site_path}/${path}/body`, {
    headers: headers(),
  });

  if (response.status === 200) {
    return response.json();
  }
}
